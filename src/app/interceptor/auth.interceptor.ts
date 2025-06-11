import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { API_ENDPOINTS } from 'src/config/api-endpoints';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    private readonly endpointsRequiringFraccId: string[] = [
    '/users',
    '/proveedores',
    '/residencias',
    '/actividades'
    // agrega más rutas según tu API
  ];

  private isProtectedRoute(url: string): boolean {
    const publicEndpoints = [
      API_ENDPOINTS.auth.login,
      API_ENDPOINTS.auth.refreshToken,
      API_ENDPOINTS.auth.register,
      // API_ENDPOINTS.auth.forgotPassword
    ];
    return !publicEndpoints.some(endpoint => url.includes(endpoint));
  }

  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = localStorage.getItem('token');
    const fraccId = this.getFraccionamientoId();


    if (!accessToken && this.isProtectedRoute(req.url)) {
      this.authService.logout();
      this.router.navigate(['/login']);
      return throwError(() => new Error('No token found'));
    }

    // if (accessToken) {
    //   authReq = authReq.clone({
    //     headers: authReq.headers.set('Authorization', `Bearer ${accessToken}`)
    //   });
    // }

    let headers = req.headers;

    if (accessToken) {
      headers = headers.set('Authorization', `Bearer ${accessToken}`);
    }

    // if (this.needsFraccionamientoId(req.url) && fraccId) {
    //   headers = headers.set('fraccionamiento-id', fraccId);
    // }

    const authReq = req.clone({
      withCredentials: true,
      headers
    });

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && req.url !== API_ENDPOINTS.auth.refreshToken) {
          return this.handle401(authReq, next);
        }

        return throwError(() => error);
      })
    );
  }

  private handle401(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.refreshToken().pipe(
      switchMap((response) => {
        const newToken = response.message.token;
        if (newToken) {
          localStorage.setItem('token', newToken);

          const newReq = req.clone({
            withCredentials: true,
            headers: req.headers.set('Authorization', `Bearer ${newToken}`)
          });

          return next.handle(newReq);
        } else {
          this.authService.logout();
          this.router.navigate(['/login']);
          return throwError(() => new Error("Token inválido"));
        }
      }),
      catchError((error) => {
        this.authService.logout();
        this.router.navigate(['/login']);
        return throwError(() => error);
      })
    );

  }
  // private needsFraccionamientoId(url: string): boolean {
  //   return this.endpointsRequiringFraccId.some(endpoint => url.includes(endpoint));
  // }

  private getFraccionamientoId(): string | null {
    const local = localStorage.getItem('id_fraccionamiento');
    const cookieMatch = document.cookie.match(/(^| )id_fraccionamiento=([^;]+)/);
    return local || (cookieMatch ? cookieMatch[2] : null);
  }
}


// import { Injectable } from '@angular/core';
// import {
//   HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
// } from '@angular/common/http';
// import { Observable, throwError, from } from 'rxjs';
// import { catchError, switchMap } from 'rxjs/operators';
// import { AuthService } from '../services/auth.service';
// import { Router } from '@angular/router';
// import { API_ENDPOINTS } from 'src/config/api-endpoints';

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {

//   private isProtectedRoute(url: string): boolean {
//     const publicEndpoints = [
//       API_ENDPOINTS.auth.login,
//       API_ENDPOINTS.auth.refreshToken,
//       API_ENDPOINTS.auth.register,
//       // API_ENDPOINTS.auth.forgotPassword
//     ];
//     return !publicEndpoints.some(endpoint => url.includes(endpoint));
//   }

//   constructor(private authService: AuthService, private router: Router) {}

//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const accessToken = localStorage.getItem('token');

//     if (!accessToken && this.isProtectedRoute(req.url)) {
//       this.authService.logout();
//       this.router.navigate(['/login']);
//       return throwError(() => new Error('No token found'));
//     }

//     // Agrega el token solo si existe
//     let authReq = req;
//     if (accessToken) {
//       authReq = req.clone({
//         headers: req.headers.set('Authorization', `Bearer ${accessToken}`)
//       });
//     }

//     return next.handle(authReq).pipe(
//       catchError((error: HttpErrorResponse) => {
//         // Si falla con 401 y NO es el endpoint de refresh
//         if (error.status === 401 && req.url !== API_ENDPOINTS.auth.refreshToken) {
//           return this.handle401(authReq, next);
//         }

//         return throwError(() => error);
//       })
//     );
//   }

//   private handle401(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     return this.authService.refreshToken().pipe(
//       switchMap((response) => {
//         const newToken = response.message.token;
//         if (newToken) {
//           localStorage.setItem('token', newToken);
//           const newReq = req.clone({
//             headers: req.headers.set('Authorization', `Bearer ${newToken}`)
//           });
//           return next.handle(newReq);
//         } else {
//           this.authService.logout();
//           this.router.navigate(['/login']);
//           return throwError(() => new Error("Token inválido"));
//         }
//       }),
//       catchError((error) => {
//         this.authService.logout(); // Limpia token
//         this.router.navigate(['/login']);
//         return throwError(() => error);
//       })
//     );
//   }
// }
