import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { ToastService } from './../shared/toast/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DeudorService {

  private baseUrl = API_ENDPOINTS.deudores;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
            ) {}

  getDeudores(): Observable<any> {
    if (!this.authService.hasPermission('GETDDRSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.list);
  }

  getDeudor(id: number): Observable<any> {
    if (!this.authService.hasPermission('GETDDRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createDeudor(data: any): Observable<any> {
    if (!this.authService.hasPermission('CREATDDRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateDeudor(data: any): Observable<any> {
    if (!this.authService.hasPermission('UPDTDDRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch<any>(this.baseUrl.update, data);
  }

  deleteDeudor(id_deudor: number): Observable<any> {
    if (!this.authService.hasPermission('DELTDDRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete<any>(this.baseUrl.delete(id_deudor));
  }
}
