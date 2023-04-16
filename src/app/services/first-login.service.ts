import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/services/auth/auth.service';

import { Admin } from 'src/app/models/admin';
import { Basicadmin } from 'src/app/models/basicadmin';

import { Employee } from 'src/app/models/employee';


@Injectable({
  providedIn: 'root'
})
export class FirstLoginService {
  adminURL = 'http://localhost:8080/firstLoginAdmin/';
  empURL = 'http://localhost:8080/firstLoginEmp/';

updateAdmin(adm:Admin,id:number){
const headers = this.authService.setAuthTokenHeader();   
return this.http.put<Admin>(this.adminURL+id,adm , { headers });
}

updateBasicAdmin(badm:Basicadmin,id:number){
  const headers = this.authService.setAuthTokenHeader();   
  return this.http.put<Basicadmin>(this.adminURL+id,badm , { headers });
  }

updateEmp(emp:Employee,id:number){
  const headers = this.authService.setAuthTokenHeader();   
  return this.http.put<Employee>(this.empURL+id,emp , { headers });
}

constructor(public http:HttpClient  , private authService: AuthService) { }
}
