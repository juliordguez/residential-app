import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { UserResponse } from '../models/response/user.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = API_ENDPOINTS.users;

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.baseUrl.list);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.baseUrl.getById(id));
  }

  createUser(user: any): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl.create, user);
  }

  updateUser(uuid: string, user: UserResponse): Observable<UserResponse> {
    return this.http.put<UserResponse>(`${this.baseUrl.update}/${uuid}`, user);
  }

  deleteUser(user_uuid: string): Observable<any> {
  console.log('[DEBUG] Endpoint DELETE:', API_ENDPOINTS.users.delete(user_uuid)); // 👈
  return this.http.delete(API_ENDPOINTS.users.delete(user_uuid));
}



}
