import { Component , ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Basicadmin } from 'src/app/models/basicadmin';
import { BasicAdminService } from 'src/app/services/basic-admin.service';

@Component({
  selector: 'app-basic-admin-add',
  templateUrl: './basic-admin-add.component.html',
  styleUrls: ['./basic-admin-add.component.css']
})
export class BasicAdminAddComponent {
  email: string ='';
  password: string ='';
  errorMessage: string[] = [];


  validateEmail() {
    const emailInput =  this.badm.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = emailRegex.test(emailInput);
    const isPasswordValid = this.validatePassword();
    const isNameValid = this.validatNname();
    const isValidsalary = this.validateSalary();
    const isValidrole = this.validatRole();

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
    if(!isValidrole){
      this.errorMessage.push('Enter a valid role that contains only letters');
    }

    if(this.badm.birthdate == ""){
      this.errorMessage.push('Enter a valid birthdate ');

    }
    this.errorMessage.join(' ');

}

 
 
  // Use ViewChild to get a reference to the email input element
  @ViewChild('email', { static: true }) emailInput!: ElementRef;
  
  validatePassword() {
    const passwordInput = this.badm.password;
  
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
      const firstNameInput = this.badm.firstName;
      const lastNameInput = this.badm.lastName;
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
      
      const salaryInput = this.badm.salary.toString();
      
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
 
    validatRole() {
      const RoleInput = this.badm.Role.toString();;
      const roleField = document.getElementsByName('role')[0] ;
      const AddRegex = /^[A-Za-z]+$/;
      const isValidrole = AddRegex.test(RoleInput);
      if(isValidrole == true){         
        roleField.classList.add('is-valid');
        roleField.classList.remove('is-invalid');
            return true;
      }
      else{       
        roleField.classList.remove('is-valid');
        roleField.classList.add('is-invalid');
      }
  
          return false;
    }
    @ViewChild('RoleInput', { static: true }) RoleInput!: ElementRef;


  date=Date.now();
  date2=this.date.toString();
  badm :Basicadmin= new Basicadmin(0,"","","","","",this.date2,0,"","");
  constructor(public BasicAdminService: BasicAdminService, public router:Router){}
  save(){
    this.BasicAdminService.addBasicAdmin(this.badm).subscribe(data =>{
      console.log(data);
      this.badm =data;
      this.router.navigateByUrl("/BasicAdmin");
    });
  }
  onSubmit() {
 
    if(this.errorMessage.length === 0){
      this.save();
      }
    }
}
