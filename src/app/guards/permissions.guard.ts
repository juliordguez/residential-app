import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const permissionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const requiredPermission = route.data?.['permission'];

  if (requiredPermission && authService.hasPermission(requiredPermission)) {
    return true;
  }

  return router.createUrlTree(['/unauthorized']);
};
