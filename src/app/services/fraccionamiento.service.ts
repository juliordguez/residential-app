import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { FraccionamientoResponse } from '../models/response/fraccionamiento.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { ToastService } from './../shared/toast/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class RolService {

  private baseUrl = API_ENDPOINTS.fraccionamiento;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
            ) {}

  getFraccionamientos(): Observable<FraccionamientoResponse[]> {
    if (!this.authService.hasPermission('GETFRCMTSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<FraccionamientoResponse[]>(this.baseUrl.list);
  }

  getFraccionamiento(id: number): Observable<FraccionamientoResponse> {
    if (!this.authService.hasPermission('GETFRCMTMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<FraccionamientoResponse>(this.baseUrl.getById(id));
  }

  crearFraccionamiento(fraccionamiento: FraccionamientoResponse): Observable<FraccionamientoResponse> {
    if (!this.authService.hasPermission('CREATFRCMTSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post<FraccionamientoResponse>(this.baseUrl.create, fraccionamiento);
  }

  actualizarFraccionamiento(fraccionamiento: FraccionamientoResponse): Observable<FraccionamientoResponse> {
    if (!this.authService.hasPermission('UPDTFRCMTSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.put<FraccionamientoResponse>(this.baseUrl.update, fraccionamiento);
  }

  eliminarFraccionamiento(id: number): Observable<void> {
    if (!this.authService.hasPermission('DELTFRCMTMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
