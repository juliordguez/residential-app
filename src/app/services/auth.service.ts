import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginRequest } from '../models/request/auth.model';
import { ApiResponse, LoginResponse } from '../models/response/auth.model';
import { HttpClient } from '@angular/common/http';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private permissions: string[] = [];

  private url_base = API_ENDPOINTS.auth;

  private authState = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private http: HttpClient) {
    this.revalidateToken();
    this.loadPermissions();
  }

  public authenticated$ = this.authState.asObservable();


    private loadPermissions(): void {
    // Por ejemplo: según el rol o perfil que tengas guardado
    const role = localStorage.getItem('userRole'); // 'admin', 'tesorero', etc.

      this.permissions = [
        'PERFIL_VIEW',

        // USUARIOS USR
        'GETUSRSMET01',
        'DELTUSRMET01',
        'UPDTUSRMET01',
        'CREATUSRMET01',
        'GETUSRMET01',

        // ROLES  ROL
        // 'GETROLSMET01',
        // 'GETROLMET01',
        // 'DELTROLMET01',
        // 'UPDTROLMET01',
        // 'CREATROLMET01',

        //  CASAS  CSAS
        'GETCSASMET01',
        'GETCSAMET01',
        'DELTCSAMET01',
        'UPDTCSAMET01',
        'CREATCSAMET01',

        //  PROVEDORES  PRVDRS
        'GETPRVDRSMET01',
        'GETPRVDRMET01',
        'DELTPRVDRMET01',
        'UPDTPRVDRMET01',
        'CREATPRVDRMET01',

        //  DEUDORES  DDRS
        'GETDDRSMET01',
        'GETDDRMET01',
        'DELTDDRMET01',
        'UPDTDDRMET01',
        'CREATDDRMET01',

        //  MOROSOS  MRSOS
        'GETMRSOSMET01',
        'GETMRSOSMET01',
        'DELTMRSOSMET01',
        'UPDTMRSOSMET01',
        'CREATMRSOSMET01',

        //  MASCOTAS  MSCTS
        'GETMSCTSMET01',
        'GETMSCTMET01',
        'DELTMSCTMET01',
        'UPDTMSCTMET01',
        'CREATMSCTMET01',

        //  NOTICIAS NTCS
        'GETNTCSMET01',
        'GETNTCMET01',
        'DELTNTCMET01',
        'UPDTNTCMET01',
        'CREATNTCMET01',

        //  FRACCIONAMIENTOS FRCMTS
        'GETFRCMTSMET01',
        'GETFRCMTMET01',
        'DELTFRCMTMET01',
        'UPDTFRCMTSMET01',
        'CREATFRCMTSMET01',

        // TESORERIA
        'GETTSRASMET01',
        'GETTSRAMET01',
        'CREATTSRAMET01',
        'UPDTTSRAMET01',
        'DELTTSRAMET01',

        //  ZONA COMUN
        'GETZNCMTRSMET01',
        'GETZNCMTRMET01',
        'CREATZNCMTRMET01',
        'UPDTZNCMTRMET01',
        'DELTZNCMTRMET01',

        // REGLAMENTO
        'GETRGLMTOSMET01',
        'GETRGLMTOMET01',
        'CREATRGLMTOMET01',
        'UPDTRGLMTOMET01',
        'DELTRGLMTOMET01',

        // MERCADO
        'GETMRCDSMET01',
        'GETMRCDMET01',
        'CREATMRCDMET01',
        'UPDTMRCDMET01',
        'DELTMRCDMET01',

      ];

      //    this.permissions = [
      //   'DASHBOARD_VIEW',
      //   'USUARIOS_VIEW',
      //   'ROLES_VIEW',
      //   'TESORERIA_VIEW',
      //   'PROVEEDORES_VIEW',
      //   'NOTICIAS_VIEW',
      //   'USUARIOS_GET_USERS',
      //   'USUARIOS_GET_USER',
      //   'USUARIOS_CREATE',
      //   'USUARIOS_UPDATE',
      //   'USUARIOS_DELETE',
      // ];

    if (role === 'admin') {
      this.permissions = [
        'DASHBOARD_VIEW',
        'USUARIOS_VIEW',
        'ROLES_VIEW',
        'TESORERIA_VIEW',
        'PROVEEDORES_VIEW',
        'NOTICIAS_VIEW'
      ];
    }

    if (role === 'tesorero') {
      this.permissions = [
        'DASHBOARD_VIEW',
        'TESORERIA_VIEW',
        'DEUDORES_VIEW'
      ];
    }

    // Puedes ajustar esto según la lógica que prefieras
  }

  getUserPermissions(): string[] {
    return this.permissions;
  }

  /** Devuelve el estado de autenticación como un booleano */
  isAuthenticated(): boolean {
    return this.authState.value;
  }

  /** Método para iniciar sesión */
  login(credentials: LoginRequest): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(this.url_base.login, credentials);
  }

  /** Método para cerrar sesión */
  logout(): void {
    localStorage.removeItem('token');
    this.authState.next(false);
  }

  /** Verifica si el token es válido */
  checkToken(): boolean {
    const token = localStorage.getItem('token');
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > Date.now() / 1000;
    } catch (e) {
      return false;
    }
  }

  refreshToken(): Observable<ApiResponse<LoginResponse>> {
    return this.http.post<ApiResponse<LoginResponse>>(this.url_base.refreshToken, {}, { withCredentials: true });
  }

  setAuthenticated(value: boolean): void {
    this.authState.next(value);
  }

  revalidateToken(): void {
    const isValid = this.checkToken();
    this.setAuthenticated(isValid);
  }

  hasPermission(permission: string): boolean {
  return this.getUserPermissions().includes(permission);
}

}
