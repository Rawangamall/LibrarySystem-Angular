import { Component , ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginapp',
  templateUrl: './loginapp.component.html',
  styleUrls: ['./loginapp.component.css']
})
export class LoginappComponent {
  email: string ='';
  password: string ='';
  errorMessage: string = '';

  validateEmail() {
    const emailInput = this.email;
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
    const passwordInput = this.password;
  
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test(passwordInput);
  
    return isValidPassword;
  }
  
  // Use ViewChild to get a reference to the password input element
  @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
 
  constructor(private authService: AuthService , private router: Router) {}

  onSubmit() {
    if(this.errorMessage == ''){
    this.authService.login(this.email, this.password)
  }
 // this.router.navigate(['']);

  }

}