import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  private baseUrl = API_ENDPOINTS.proveedores;

  constructor(private http: HttpClient) {}

  getProveedores(): Observable<any> {
    return this.http.get<any>(this.baseUrl.list);
  }

  getProveedor(id: number): Observable<any> {
    return this.http.get<any>(this.baseUrl.getById(id));
  }

  createProveedor(data: any): Observable<any> {
    return this.http.post<any>(this.baseUrl.create, data);
  }

  updateProveedor(data: any): Observable<any> {
    return this.http.patch<any>(this.baseUrl.update, data);
  }

  deleteProveedor(id_proveedor: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl.delete(id_proveedor));
  }
}
