import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { RolResponse } from '../models/response/rol.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})

export class RolService {

  private baseUrl = API_ENDPOINTS.rol;

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any> {
    return this.http.get<RolResponse[]>(this.baseUrl.list);
  }

  getRol(id: number): Observable<RolResponse> {
    return this.http.get<RolResponse>(this.baseUrl.getById(id));
  }

  crearRol(user: RolResponse): Observable<RolResponse> {
    return this.http.post<RolResponse>(this.baseUrl.create, user);
  }

  actualizarRol(user: RolResponse): Observable<RolResponse> {
    return this.http.patch<RolResponse>(this.baseUrl.update, user);
  }

  eliminarRol(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
