import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { ToastService } from './../shared/toast/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  private baseUrl = API_ENDPOINTS.casas;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
            ) {}

  getCasas(): Observable<any> {
    if (!this.authService.hasPermission('GETCSASMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.list);
  }

  getCasa(id: number): Observable<any> {
    if (!this.authService.hasPermission('GETCSAMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createCasa(data: any): Observable<any> {
    if (!this.authService.hasPermission('CREATCSAMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateCasa(data: any): Observable<any> {
    if (!this.authService.hasPermission('UPDTCSAMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch<any>(`${this.baseUrl.update}`, data);
  }

  deleteCasa(id: number): Observable<any> {
    if (!this.authService.hasPermission('DELTCSAMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete<any>(this.baseUrl.delete(id));
  }
}

