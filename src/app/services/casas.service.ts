import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class CasasService {

  private baseUrl = API_ENDPOINTS.casas;

  constructor(private http: HttpClient) {}

  getCasas(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl.list);
  }
}
