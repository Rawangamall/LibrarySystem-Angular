import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ValidGuard implements CanActivate {
  // userId!: number;
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const pass = this.authService.getPassword();
       const userId = Number(this.authService.getID());
       const role = this.authService.getRole();

       if(pass == "new"){
        this.router.navigateByUrl('firstlogin/'+userId);
              return false;
        }

        return true;
  }
  
}
