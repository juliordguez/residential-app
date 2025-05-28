import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CasaService {

  private baseUrl = API_ENDPOINTS.casas;

  constructor(private http: HttpClient) {}

  getCasas(): Observable<any> {
    return this.http.get<any>(this.baseUrl.list);
  }

  getCasa(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createCasa(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateCasa(data: any): Observable<any> {
    return this.http.patch<any>(`${this.baseUrl.update}`, data);
  }

  deleteCasa(id: number): Observable<any> {
    console.log('[DEBUG] Endpoint DELETE:', this.baseUrl.delete(id));
    return this.http.delete<any>(this.baseUrl.delete(id));
  }
}

