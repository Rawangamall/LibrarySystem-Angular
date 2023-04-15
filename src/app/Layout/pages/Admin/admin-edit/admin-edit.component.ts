import { Component , ElementRef, ViewChild } from '@angular/core';
import {Admin} from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent {
  email: string ='';
  password: string ='';
  // role:string ='';
  errorMessage: string[] = [];
  birthdate = new FormControl('', Validators.required);

  validateEmail() {
    const emailInput =  this.adm.email;
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
  
    if(this.adm.birthdate == ""){
      this.errorMessage.push('Enter a valid birthdate ');

    }
  
    this.errorMessage.join(' ');

}

 
 
  // Use ViewChild to get a reference to the email input element
  @ViewChild('email', { static: true }) emailInput!: ElementRef;
  
  validatePassword() {
    const passwordInput = this.adm.password;
  
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
      const firstNameInput = this.adm.firstName;
      const lastNameInput = this.adm.lastName;
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
      
      const salaryInput = this.adm.salary.toString();
      
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
      const RoleInput = this.adm.Role.toString();;
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
  adm:Admin=new Admin(0,"","","","","",this.date2,0,"","");
  constructor (public adminService:AdminService, public router:Router, public route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const admId = params['_id']
      this.adminService.getOneAdmin(admId).subscribe(data=>{
        this.adm = data;
      })
    });
  }
  update(){
    this.adminService.updateAdmin(this.adm,this.adm._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/Admins');
    })
  }  
  onSubmit() {
 
    if(this.errorMessage.length === 0){
      this.update();
      }
    }
}
