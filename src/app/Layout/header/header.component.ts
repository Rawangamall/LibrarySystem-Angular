import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { AdminService } from 'src/app/services/admin.service';
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

  constructor( public BasicAdminService : BasicAdminService , public AdminService : AdminService, public employeeService: EmployeeService, private authService: AuthService, public router:Router){}
  ngOnInit(){
    if (this.role === 'Employee') {
    this.employeeService.getOneEmployee(this.id).subscribe(data=>{
      this.loggedOne = data;
    });
  }

   // For Admin 
    if (this.role === 'Admin') {
    this.AdminService.getOneAdmin(this.id).subscribe(data=>{
      this.loggedOne = data;
    });
  }

   // For BasicAdmin 
      if (this.role === 'BasicAdmin') {
        this.BasicAdminService.getOneBasicAdmin(this.id).subscribe(data=>{
          this.loggedOne = data;
        });
      }

   // For owner 
   if (this.role === 'Owner' && this.email === "rawan.gamaal21@gmail.com") {
      this.loggedOne.email = this.email;
      this.loggedOne.firstName = "Rawan";
      this.loggedOne._id = this.id;
      this.loggedOne.Role == this.role
  }
}
redirectToLogin() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
