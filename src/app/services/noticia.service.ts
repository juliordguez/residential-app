import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { ToastService } from './../shared/toast/toast.service';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private baseUrl = API_ENDPOINTS.noticias;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
            ) {}

  getNoticias(): Observable<any> {
    if (!this.authService.hasPermission('GETNTCSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.list);
  }

  getNoticia(id: number): Observable<any> {
    if (!this.authService.hasPermission('GETNTCMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createNoticia(data: any): Observable<any> {
    if (!this.authService.hasPermission('CREATNTCMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateNoticia(data: any): Observable<any> {
    if (!this.authService.hasPermission('UPDTNTCMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.patch<any>(this.baseUrl.update, data);
  }

  deleteNoticia(id_noticia: number): Observable<any> {
    if (!this.authService.hasPermission('DELTNTCMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.delete<any>(this.baseUrl.delete(id_noticia));
  }
}
