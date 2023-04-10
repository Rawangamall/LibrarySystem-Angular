import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseURL = 'http://localhost:8080/Employees/';
  baseURL2 = 'http://localhost:8080/Employee/';

  getAllEmployees(){
    return this.http.get<Employee[]>(this.baseURL);
  }
  getOneEmployee(id:number){
    return this.http.get<Employee>(this.baseURL2+id);
  }
  addEmployee(emp:Employee){
    return this.http.post<Employee>(this.baseURL,emp);
  }
  deleteEmployeeByID(id:number){
    location.reload();
    return this.http.delete(this.baseURL2+id);
  }
  updateEmployee(emp:Employee,id:number){
    console.log(this.baseURL2+id,emp);
    return this.http.put<Employee>(this.baseURL2+id,emp);
  }
  constructor(public http:HttpClient) {
    this.http.get<Employee>("http://localhost:8080/Employees").subscribe(data=>{
      console.log(data);
    })
   }
}
