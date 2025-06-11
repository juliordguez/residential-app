import { ToastService } from './../shared/toast/toast.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { UserResponse } from '../models/response/user.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = API_ENDPOINTS.users;

  constructor(private http: HttpClient,
              private authService: AuthService,
              private toast: ToastService
) {}

  getUsers(): Observable<any> {
    if (!this.authService.hasPermission('GETUSRSMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<any>(this.baseUrl.list);
  }

  getUser(id: number): Observable<UserResponse> {
    if (!this.authService.hasPermission('GETUSRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.get<UserResponse>(this.baseUrl.getById(id));
  }

  createUser(user: any): Observable<UserResponse> {
    if (!this.authService.hasPermission('CRATUSRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.post<UserResponse>(this.baseUrl.create, user);
  }

  updateUser(uuid: string, user: UserResponse): Observable<UserResponse> {
    if (!this.authService.hasPermission('UPDTUSRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
    return this.http.put<UserResponse>(`${this.baseUrl.update}/${uuid}`, user);
  }

  deleteUser(user_uuid: string): Observable<any> {
  if (!this.authService.hasPermission('DELUSRMET01')){
      this.toast.error('Permisos insuficientes');
      return;
    }
  return this.http.delete(API_ENDPOINTS.users.delete(user_uuid));
}
}
