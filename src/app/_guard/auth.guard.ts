import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated()) {
      // TODO check the roles
      return true; // Allow access to the route
    } else {
      this.router.navigate(['/security/login'], {
        queryParams: { returnUrl: state.url },
      });
      return false; // Prevent access to the route
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/security/login']);
  }
}
