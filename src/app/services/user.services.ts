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

  getUsers(): Observable<UserResponse[]> {
    return this.http.get<UserResponse[]>(this.baseUrl.list);
  }

  getUser(id: number): Observable<UserResponse> {
    return this.http.get<UserResponse>(this.baseUrl.getById(id));
  }

  createUser(user: UserResponse): Observable<UserResponse> {
    return this.http.post<UserResponse>(this.baseUrl.create, user);
  }

  updateUser(id: number, user: UserResponse): Observable<UserResponse> {
    return this.http.put<UserResponse>(this.baseUrl.update, user);
  }

  deleteUser(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

}
