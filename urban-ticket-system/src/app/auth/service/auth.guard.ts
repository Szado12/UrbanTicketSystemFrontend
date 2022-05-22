import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { RoleService } from './role.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService, 
    private tokenService: TokenService, 
    private roleService: RoleService,
    private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    const url: string = state.url;

    return this.checkLogin(next, url);
  }

  checkLogin(route: ActivatedRouteSnapshot, url: string): any {

    if (this.tokenService.getToken()) {
      const userRole = this.roleService.getRole();
      if (route.data.role && route.data.role.indexOf(userRole) === -1) {
        this.router.navigate(['/auth']);
        return false;
      }
      return true;
    }

    this.authService.redirectUrl = url;

    this.router.navigate(['/auth']).then(_ => false);
  }
}
