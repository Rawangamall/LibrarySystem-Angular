
import { Component , ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css'],
  
})
export class MemberAddComponent {
  email: string ='';
  password: string ='';
  errorMessage: string[] = [];
  birthdate = new FormControl('', Validators.required);

  validateEmail() {
    const emailInput =  this.member.email;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isValidEmail = emailRegex.test(emailInput);
    const isPasswordValid = this.validatePassword();
    const isNameValid = this.validatNname();
    const isValidphone = this.validatePhone();
    const isValidaddress = this.validatAddress();
    // const isValidbirthdate = this.validateBirthday();

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
    if(!isValidphone){
      this.errorMessage.push('Enter a valid phone that contains only numbers');
    }
    if(!isValidaddress){
      this.errorMessage.push('Enter a valid address that contains only letters');
    }
    // if(!isValidbirthdate){
    //   this.errorMessage.push('Enter a valid birthdate');
    // }
    this.errorMessage.join(' ');

}
@ViewChild('email', { static: true }) emailInput!: ElementRef;

validatePassword() {
  const passwordInput = this.member.password;

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
    const NameInput = this.member.fullName;
    const fnameField = document.getElementsByName('name')[0] ;
    const NameRegex = /^[A-Za-z]+$/;
    const isValidfname = NameRegex.test(NameInput);
    if(isValidfname == true){         
      fnameField.classList.add('is-valid');
    fnameField.classList.remove('is-invalid');
         return true;
    }
    else{       
     fnameField.classList.remove('is-valid');
     fnameField.classList.add('is-invalid');
    }

       return false;
  }
  @ViewChild('NameInput', { static: true }) NameInput!: ElementRef;

  validatAddress() {
    const AddressInput = this.member.fullAddress;
    const addField = document.getElementsByName('address')[0] ;
    const AddRegex = /^[A-Za-z]+$/;
    const isValidaddress= AddRegex.test(AddressInput);
    if(isValidaddress == true){         
      addField.classList.add('is-valid');
      addField.classList.remove('is-invalid');
         return true;
    }
    else{       
      addField.classList.remove('is-valid');
      addField.classList.add('is-invalid');
    }

       return false;
  }
  @ViewChild('AddressInput', { static: true }) AddressInput!: ElementRef;

  validatePhone() {
      
    const PhoneInput = this.member.phoneNumber.toString();
    
    const numRegex =/^[0-9][0-9]*$/;
    const isValidphone = numRegex.test(PhoneInput);
    const phoneField = document.getElementsByName('phone')[0] ;

  if(isValidphone == true ){      
    phoneField.classList.add('is-valid');
    phoneField.classList.remove('is-invalid');
  }else{
    phoneField.classList.remove('is-valid');
    phoneField.classList.add('is-invalid');
  }
    return isValidphone;
  }
    @ViewChild('PhoneInput', { static: true }) PhoneInput!: ElementRef;

  date=Date.now();
  date2=this.date.toString();
  member:Member=new Member(0,"","","","",0,this.date2,"");
    constructor(public memberService:MemberService, public router:Router){}
  save(){
    this.memberService.addMember(this.member).subscribe(data =>{
      console.log(data);
      this.member=data;
      this.router.navigateByUrl("/member");
    });
  }
  onSubmit() {
 
    if(this.errorMessage.length === 0){
      this.save();
    }
    }
}
