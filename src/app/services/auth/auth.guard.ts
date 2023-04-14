import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class OwnerBAadmin implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getRole();
      if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner"){
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  
}
@Injectable({
  providedIn: 'root'
})

export class OwnerBA implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getRole();
      if (role =="BasicAdmin"|| role =="Owner"){
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
  
}
@Injectable({
  providedIn: 'root'
})

export class Owner implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getRole();
      if (role =="Owner"){
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class BasicAdmin implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getRole();
      if (role =="BasicAdmin"){
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class Admin implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getRole();
      if (role =="Admin"){
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class Employee implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const role = this.authService.getRole();
      if (role =="Employee"){
      return true;
      }
      this.router.navigate(['/login']);
      return false;
  }
}
@Injectable({
  providedIn: 'root'
})
export class OwnerBAadminEmp implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = this.authService.getRole();
    if (role == "BasicAdmin" || role == "Admin" || role == "Owner" || role == "Employee") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class BAdminEmp implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = this.authService.getRole();
    if (role == "BasicAdmin" || role == "Employee") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}

@Injectable({
  providedIn: 'root'
})
export class BAadmin implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const role = this.authService.getRole();
    if (role == "BasicAdmin" ||  role == "Admin") {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}



