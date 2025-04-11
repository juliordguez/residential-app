import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

export const guestGuard = (): Observable<boolean> => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.authenticated$.pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        // ✅ Usuario NO autenticado → puede acceder a login, register, etc.
        return true;
      } else {
        // ❌ Usuario ya autenticado → redirigir al dashboard
        router.navigate(['/dashboard']);
        return false;
      }
    }),
    catchError(() => {
      // Por si ocurre un error, redirigir igual al dashboard
      router.navigate(['/dashboard']);
      return of(false);
    })
  );
};
