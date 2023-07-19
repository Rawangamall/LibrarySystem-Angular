import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';
import {BasicAdminService } from 'src/app/services/basic-admin.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headers = this.authService.setAuthTokenHeader();
  role = this.authService.getRole();
  email = this.authService.getEmail();
  id = Number(this.authService.getID());

  loggedOne: any = "";

  constructor( public BasicAdminService : BasicAdminService, public employeeService: EmployeeService, private authService: AuthService, public router:Router){}
  ngOnInit(){
    if (this.role === 'Employee') {
    this.employeeService.getOneEmployee(this.id).subscribe(data=>{
      this.loggedOne = data;
      console.log(this.loggedOne._id , "the log")

    });
  }
    // For BasicAdmin 
    if (this.role === 'BasicAdmin') {
    this.BasicAdminService.getOneBasicAdmin(this.id).subscribe(data=>{
      this.loggedOne = data;
      console.log(this.loggedOne._id , "the log")
    });
  }
      // For Admin 
      if (this.role === 'Admin') {
        this.BasicAdminService.getAllBasicAdmins().subscribe(data=>{
          this.loggedOne = data;
        });
      }
}
redirectToLogin() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
