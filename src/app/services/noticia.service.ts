import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private baseUrl = API_ENDPOINTS.noticias;

  constructor(private http: HttpClient) {}

  getNoticias(id_fraccionamiento: number): Observable<any> {
    return this.http.get<any>(this.baseUrl.list(id_fraccionamiento));
  }

  getNoticia(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createNoticia(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateNoticia(data: any): Observable<any> {
    return this.http.patch<any>(this.baseUrl.update, data);
  }

  deleteNoticia(id_fraccionamiento: number, id_noticia: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl.delete(id_fraccionamiento, id_noticia));
  }
}
