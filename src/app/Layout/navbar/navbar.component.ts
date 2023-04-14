import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  headers = this.authService.setAuthTokenHeader();
  role = this.authService.getRole();
  
  constructor(public http:HttpClient , private authService: AuthService) {
   
  }
}
