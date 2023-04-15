import { Component , ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  email: string ='';
  password: string ='';
  errorMessage: string[] = [];
  birthdate = new FormControl('', Validators.required);

  validateEmail() {
    const emailInput =  this.emp.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = emailRegex.test(emailInput);
    const isPasswordValid = this.validatePassword();
    const isNameValid = this.validatNname();
    const isValidsalary = this.validateSalary();

  this.errorMessage = [];

    if (!isValidEmail) {
     const emailField = document.getElementsByName('email')[0] ;

      emailField.classList.remove('is-valid');
      emailField.classList.add('is-invalid');

      this.errorMessage.push('Enter a valid email address');
    }else{
      const emailField = document.querySelector('input[name="email"]') ;
      if (emailField) {
      emailField.classList.remove('is-invalid');
      emailField.classList.add('is-valid');
      }
    }
    if (!isPasswordValid) {
      this.errorMessage.push('Enter a valid password (at least 8 characters long and contains a digit)');
    }
    if(!isNameValid){
      this.errorMessage.push('Enter a valid name that contains only letters');
    }
    if(!isValidsalary){
      this.errorMessage.push('Enter a valid salary that contains only numbers');
    }
    if(this.emp.birthdate == ""){
      this.errorMessage.push('Enter a valid birthdate ');

    }
    this.errorMessage.join(' ');

}

 
 
  // Use ViewChild to get a reference to the email input element
  @ViewChild('email', { static: true }) emailInput!: ElementRef;
  
  validatePassword() {
    const passwordInput = this.emp.password;
  
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test(passwordInput);
    const passField = document.getElementsByName('password')[0] ;

  if(isValidPassword == true ){      
    passField.classList.add('is-valid');
    passField.classList.remove('is-invalid');
  }else{
    passField.classList.remove('is-valid');
    passField.classList.add('is-invalid');
  }
    return isValidPassword;
  }
    @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;

    validatNname() {
      const firstNameInput = this.emp.firstName;
      const lastNameInput = this.emp.lastName;
      const fnameField = document.getElementsByName('fname')[0] ;
      const lnameField = document.getElementsByName('lname')[0] ;
      const NameRegex = /^[A-Za-z]+$/;
      const isValidfname = NameRegex.test(firstNameInput);
      const isValidlname = NameRegex.test(lastNameInput);
      if(isValidfname == true){         
        fnameField.classList.add('is-valid');
      fnameField.classList.remove('is-invalid');}
      else{       
       fnameField.classList.remove('is-valid');
       fnameField.classList.add('is-invalid');}
       if(isValidlname == true){         
        lnameField.classList.add('is-valid');
        lnameField.classList.remove('is-invalid');}
      else{       
        lnameField.classList.remove('is-valid');
        lnameField.classList.add('is-invalid');}

      if(isValidfname == true && isValidlname == true)
         {return true;}

         return false;
    }
    
    @ViewChild('firstNameInput', { static: true }) firstNameInput!: ElementRef;
    @ViewChild('lastNameInput', { static: true }) lastNameInput!: ElementRef;

    validateSalary() {
      
      const salaryInput = this.emp.salary.toString();
      
      const numRegex =/^[1-9][0-9]*$/;
      const isValidsalary = numRegex.test(salaryInput);
      const salaryField = document.getElementsByName('salary')[0] ;
  
    if(isValidsalary == true ){      
      salaryField.classList.add('is-valid');
      salaryField.classList.remove('is-invalid');
    }else{
      salaryField.classList.remove('is-valid');
      salaryField.classList.add('is-invalid');
    }
      return isValidsalary;
    }
      @ViewChild('salaryInput', { static: true }) salaryInput!: ElementRef;
    
  
  date=Date.now();
  date2=this.date.toString();
  emp:Employee=new Employee(0,"","","","","",this.date2,0,"");
  constructor(public employeeService:EmployeeService, public router:Router ){}
  save(){
    this.employeeService.addEmployee(this.emp).subscribe(data =>{
      console.log(data);
      this.emp=data;
      this.router.navigateByUrl("/employee");
    });
  }

  onSubmit() {
 
    if(this.errorMessage.length === 0){
      this.save();
      }
    }
}
