import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { AuthService } from 'src/app/services/auth/auth.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headers = this.authService.setAuthTokenHeader();
  role = this.authService.getRole();
  email = this.authService.getEmail();
  
  emps: any[]=[];
  constructor(public employeeService: EmployeeService, private authService: AuthService, public router:Router){}
  ngOnInit(){
    this.employeeService.getAllEmployees().subscribe(data=>{
      this.emps = data;
    });
    // For admins also
}
redirectToLogin() {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
