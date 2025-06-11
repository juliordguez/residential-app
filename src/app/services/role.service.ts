import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { RolResponse } from '../models/response/rol.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { ToastService } from './../shared/toast/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RolService {

  private baseUrl = API_ENDPOINTS.rol;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
  ) {}

  getRoles(): Observable<any> {
    if (!this.authService.hasPermission('GETROLSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<RolResponse[]>(this.baseUrl.list);
  }

  getRol(id: number): Observable<RolResponse> {
    if (!this.authService.hasPermission('GETROLMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<RolResponse>(this.baseUrl.getById(id));
  }

  crearRol(user: RolResponse): Observable<RolResponse> {
    if (!this.authService.hasPermission('CREATROLMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post<RolResponse>(this.baseUrl.create, user);
  }

  actualizarRol(user: RolResponse): Observable<RolResponse> {
    if (!this.authService.hasPermission('UPDTROLMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch<RolResponse>(this.baseUrl.update, user);
  }

  eliminarRol(id: number): Observable<void> {
    if (!this.authService.hasPermission('DELTROLMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
