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

updateAdmin(password:String,id:number){
const headers = this.authService.setAuthTokenHeader(); 
const requestBody = { password: password };

return this.http.patch<Admin>(this.adminURL+id,requestBody , { headers });
}

updateEmp(password:String,id:number){
  const headers = this.authService.setAuthTokenHeader();   
  const requestBody = { password: password };

  return this.http.patch<Employee>(this.empURL+id,requestBody , { headers });
}

constructor(public http:HttpClient  , private authService: AuthService) { }
}
