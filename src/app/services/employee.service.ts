import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL = 'http://localhost:8080/Employees/';
  baseURL2 = 'http://localhost:8080/Employee/';


  getAllEmployees(){
    const headers = this.authService.setAuthTokenHeader();   
    const role = this.authService.getRole();
    if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner") {
       return this.http.get<Employee[]>(this.baseURL , { headers });
    }else{ throw new Error('Unauthorized access: user must be an admin');}
  }
  getOneEmployee(id:number){
    const headers = this.authService.setAuthTokenHeader();
    const role = this.authService.getRole();
    if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner") {
    return this.http.get<Employee>(this.baseURL2+id , { headers });
  }else{ throw new Error('Unauthorized access: user must be an admin');}

  }
  addEmployee(emp:Employee){
    const headers = this.authService.setAuthTokenHeader();
    const role = this.authService.getRole();
    if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner") {
    return this.http.post<Employee>(this.baseURL,emp , { headers });
  }else{ throw new Error('Unauthorized access: user must be an admin');}

  }
  deleteEmployeeByID(id:number){x
    const headers = this.authService.setAuthTokenHeader();
    location.reload();
    return this.http.delete(this.baseURL2+id , { headers });
  }
  updateEmployee(emp:Employee,id:number){
    const headers = this.authService.setAuthTokenHeader();
    const role = this.authService.getRole();
    if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner") {
    console.log(this.baseURL2+id,emp);
    return this.http.put<Employee>(this.baseURL2+id,emp , { headers });
  }else{ throw new Error('Unauthorized access: user must be an admin');}

  }
  constructor(public http:HttpClient , private authService: AuthService) {
    const headers = this.authService.setAuthTokenHeader();
    const role = this.authService.getRole();
    if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner") {
    this.http.get<Employee>("http://localhost:8080/Employees", { headers }).subscribe(data=>{
      console.log(data);
    })
  }else{ throw new Error('Unauthorized access: user must be an admin');}

   }
}
