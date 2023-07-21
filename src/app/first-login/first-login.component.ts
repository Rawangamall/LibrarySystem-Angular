import { Component , ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { FirstLoginService } from 'src/app/services/first-login.service';
import { Admin } from '../models/admin';
import { Basicadmin } from 'src/app/models/basicadmin';
import { Employee } from 'src/app/models/employee';

import { BasicAdminService } from 'src/app/services/basic-admin.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent {
  password: string ='';
  errorMessage: string = '';

  validatePassword() {
    const passwordInput = this.password;
  
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test(passwordInput);
    const passField = document.getElementsByName('password')[0] ;

    if (!isValidPassword) {
      passField.classList.remove('is-valid');
      passField.classList.add('is-invalid');

      this.errorMessage = 'Enter a valid password (at least 8 characters long and contains a digit';
    }else{
      passField.classList.add('is-valid');
      passField.classList.remove('is-invalid');  
      this.errorMessage='';

    }
  }
    @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
 
 role = this.authService.getRole();
 userId = Number(this.authService.getID());

  constructor(private authService: AuthService , private router: Router ,public  BasicAdminService: BasicAdminService, public adminService:AdminService , public firstloginServices:FirstLoginService ,public route: ActivatedRoute , public EmployeeServices: EmployeeService) {}

  ngOnInit(){

    //}

  }
  update(){

    if(this.role == "Admin" || this.role == "BasicAdmin" || this.role == "Owner"){
    this.firstloginServices.updateAdmin(this.password,this.userId).subscribe(data => {
      console.log(data);
    })
    this.navigateToLogin();

  }

  else if(this.role == "Employee"){
    this.firstloginServices.updateEmp(this.password,this.userId).subscribe(data => {
    })
    this.navigateToLogin();
   }

  }  



navigateToLogin() {
  this.authService.logout();
  this.router.navigate(['/login']);
}

  onSubmit() {

    if(this.errorMessage.length == 0){
      
      this.update();
   
      }
    
    }
}
