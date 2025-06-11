import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { ToastService } from './../shared/toast/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private baseUrl = API_ENDPOINTS.mascotas;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
            ) {}

  getMascotas(id_fraccionamiento: number): Observable<any> {
        if (!this.authService.hasPermission('GETMSCTSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get(`${this.baseUrl.list}/${id_fraccionamiento}`);
  }

  getMascota(id: number): Observable<any> {
    if (!this.authService.hasPermission('GETMSCTMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createMascota(data: any): Observable<any> {
    if (!this.authService.hasPermission('CREATMSCTMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post(this.baseUrl.create, data);
  }

  updateMascota(data: any): Observable<any> {
    if (!this.authService.hasPermission('UPDTMSCTMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch(this.baseUrl.update, data);
  }

  deleteMascota(id_fraccionamiento: number, id_mascota: number): Observable<any> {
    if (!this.authService.hasPermission('DELTMSCTMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete(`${this.baseUrl.delete}/${id_fraccionamiento}/${id_mascota}`);
  }
}
