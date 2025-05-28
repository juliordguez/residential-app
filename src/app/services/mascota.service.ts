import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private baseUrl = API_ENDPOINTS.mascotas;

  constructor(private http: HttpClient) {}

  getMascotas(id_fraccionamiento: number): Observable<any> {
    return this.http.get(`${this.baseUrl.list}/${id_fraccionamiento}`);
  }

  createMascota(data: any): Observable<any> {
    return this.http.post(this.baseUrl.create, data);
  }

  updateMascota(data: any): Observable<any> {
    return this.http.patch(this.baseUrl.update, data);
  }

  deleteMascota(id_fraccionamiento: number, id_mascota: number): Observable<any> {
    return this.http.delete(`${this.baseUrl.delete}/${id_fraccionamiento}/${id_mascota}`);
  }
}
