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
       return this.http.get<Employee[]>(this.baseURL , { headers });
  }
  getOneEmployee(id:number){
    const headers = this.authService.setAuthTokenHeader();
    const role = this.authService.getRole();
    return this.http.get<Employee>(this.baseURL2+id , { headers });

  }
  addEmployee(emp:Employee){
    const headers = this.authService.setAuthTokenHeader();
    const role = this.authService.getRole();
    return this.http.post<Employee>(this.baseURL,emp , { headers });

  }
  deleteEmployeeByID(id:number){
    const headers = this.authService.setAuthTokenHeader();
    location.reload();
    return this.http.delete(this.baseURL2+id , { headers });
  }
  updateEmployee(emp:Employee,id:number){
    const headers = this.authService.setAuthTokenHeader();
    console.log(this.baseURL2+id,emp);
    return this.http.put<Employee>(this.baseURL2+id,emp , { headers });
  }

  searchForMember(searchKey: string, firstName: string, lastName: string): Observable<any> {
    const requestBody = {
      searchKey: searchKey,
      firstName: firstName,
      lastName:lastName
     
    };
    const headers = this.authService.setAuthTokenHeader();   
    const role = this.authService.getRole();
    if (role =="BasicAdmin"|| role =="Admin"|| role =="Owner") {
      return this.http.post(`${this.baseURL}search`, requestBody , { headers });
    
   }else{ throw new Error('Unauthorized access: user must be an admin');}

   
  }
   // return this.http.post(`${this.baseURL}/search`, requestBody);
    // return this.http.get<Employee[]>(this.baseURL , { headers });
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
