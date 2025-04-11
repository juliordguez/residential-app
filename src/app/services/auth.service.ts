import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { ApiResponse, LoginResponse } from '../models/response/auth.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authState = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private http: HttpClient) {
    this.revalidateToken();
  }

  /** Devuelve el estado de autenticación como un Observable */
  // isAuthenticated$(): Observable<boolean> {
  //   return this.authState.asObservable();
  // }

  public authenticated$ = this.authState.asObservable();

  /** Devuelve el estado de autenticación como un booleano */
  isAuthenticated(): boolean {
    return this.authState.value;
  }

  /** Método para iniciar sesión */
  login(credentials: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(API_ENDPOINTS.auth.login, credentials);
  }

  /** Método para cerrar sesión */
  logout(): void {
    localStorage.removeItem('token');
    this.authState.next(false);
  }

  /** Verifica si el token es válido */
  checkToken(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  refreshToken(): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(API_ENDPOINTS.auth.refreshToken, {}, { withCredentials: true });
  }

  setAuthenticated(value: boolean): void {
    this.authState.next(value);
  }

  revalidateToken(): void {
    const isValid = this.checkToken();
    this.setAuthenticated(isValid);
  }

}
