import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
  email: string;
  role: string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl: any;

  constructor(private http: HttpClient) { }

   url = 'http://localhost:8080/login'; // Replace with your server URL

  login(email: string | null, password: string | null) {
    this.http.post<any>(this.url, { email, password })
      .subscribe(
        data => {
         
          // Save the authentication token or user data to local storage
          localStorage.setItem('authToken', data.token);
           // decode the token to get the role field
           const decodedToken: DecodedToken = jwt_decode(data.token);
    
          // save the role field in local storage
          localStorage.setItem('role', decodedToken.role);

         const roleTest = localStorage.getItem('role');
          if(roleTest == "Member"){console.log("not authorized to dashboard");}
          else{
            window.location.href = '';
          }
        });
      }
      
        // getRole(): string | null{
        //   return localStorage.getItem('role');
        // }
      
      
      //   logout() {
      //     localStorage.removeItem('authToken');
      //     localStorage.removeItem('role');
      //     window.location.href = '/login';
      //   }
      
} //class