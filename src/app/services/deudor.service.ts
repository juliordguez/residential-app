import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class DeudorService {

  private baseUrl = API_ENDPOINTS.deudores;

  constructor(private http: HttpClient) {}

  getDeudores(): Observable<any> {
    return this.http.get<any>(this.baseUrl.list);
  }

  getDeudor(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createDeudor(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateDeudor(data: any): Observable<any> {
    return this.http.patch<any>(this.baseUrl.update, data);
  }

  deleteDeudor(id_deudor: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl.delete(id_deudor));
  }
}
