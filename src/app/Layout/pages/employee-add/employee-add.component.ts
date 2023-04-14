import { Component , ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  email: string ='';
  password: string ='';
  errorMessage: string = '';

  validateEmail() {
    const emailInput =  this.emp.email;
  
    const isPasswordValid = this.validatePassword();
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(emailInput);
  
    if (!isValidEmail) {
      this.errorMessage = 'Please enter a valid email address';
    } else if (!isPasswordValid) {
      this.errorMessage = 'Please enter a valid password(at least 8 characters long and contains a digit)';
    }else{
      this.errorMessage='';
    }
}

 
 
  // Use ViewChild to get a reference to the email input element
  @ViewChild('email', { static: true }) emailInput!: ElementRef;
  
  validatePassword() {
    const passwordInput = this.emp.password;
  
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test(passwordInput);
  
    return isValidPassword;
  }
  
  // Use ViewChild to get a reference to the password input element
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;

  date=Date.now();
  date2=this.date.toString();
  emp:Employee=new Employee(0,"","","","","",this.date2,0,"");
  constructor(public employeeService:EmployeeService, public router:Router ,  private authService: AuthService   ){}
  save(){
    this.employeeService.addEmployee(this.emp).subscribe(data =>{
      console.log(data);
      this.emp=data;
      this.router.navigateByUrl("/employee");
    });
  }

  onSubmit() {
 
    if(this.errorMessage == ''){
      this.save();
    }
    }
}
