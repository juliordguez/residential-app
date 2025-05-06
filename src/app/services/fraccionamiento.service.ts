import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { FraccionamientoResponse } from '../models/response/fraccionamiento.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})

export class RolService {

  private baseUrl = API_ENDPOINTS.fraccionamiento;

  constructor(private http: HttpClient) {}

  getFraccionamientos(): Observable<FraccionamientoResponse[]> {
    return this.http.get<FraccionamientoResponse[]>(this.baseUrl.list);
  }

  getFraccionamiento(id: number): Observable<FraccionamientoResponse> {
    return this.http.get<FraccionamientoResponse>(this.baseUrl.getById(id));
  }

  crearFraccionamiento(fraccionamiento: FraccionamientoResponse): Observable<FraccionamientoResponse> {
    return this.http.post<FraccionamientoResponse>(this.baseUrl.create, fraccionamiento);
  }

  actualizarFraccionamiento(fraccionamiento: FraccionamientoResponse): Observable<FraccionamientoResponse> {
    return this.http.put<FraccionamientoResponse>(this.baseUrl.update, fraccionamiento);
  }

  eliminarFraccionamiento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
