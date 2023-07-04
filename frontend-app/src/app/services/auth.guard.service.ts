import { inject } from '@angular/core';
import { CanActivateFn , Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

export function authenticationGuard(): CanActivateFn {
  return () => {
    const authService: AuthenticationService = inject(AuthenticationService);
    const router: Router = inject(Router);
    
    if (authService.isLoggedIn()) {
      return true;
    } else {
       router.navigate(['/']);
      return false;
    }
  }
}