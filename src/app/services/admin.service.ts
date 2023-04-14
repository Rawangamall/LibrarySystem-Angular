import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin} from '../models/admin';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = 'http://localhost:8080/Admins/';
  baseURL2 = 'http://localhost:8080/Admin/';
  

  getAllAdmins(): Observable<Admin[]>{
    const headers = this.authService.setAuthTokenHeader();   

        return this.http.get<Admin[]>(this.baseURL , { headers });
      }
  getOneAdmin(id:number): Observable<Admin>{
    const headers = this.authService.setAuthTokenHeader();   

        return this.http.get<Admin>(this.baseURL2+id , { headers });
      }
  
  addAdmin(adm:Admin){
    const headers = this.authService.setAuthTokenHeader();   

        return this.http.post<Admin>(this.baseURL,adm , { headers });
      }
  deleteAdminByID(id:number){
        const headers = this.authService.setAuthTokenHeader();   

        location.reload();
        return this.http.delete(this.baseURL2+id , { headers });
      }
  updateAdmin(adm:Admin,id:number){
    const headers = this.authService.setAuthTokenHeader();   

        // console.log(this.baseURL2+id,adm);
         return this.http.put<Admin>(this.baseURL2+id,adm , { headers });
       }
  constructor(public http:HttpClient  , private authService: AuthService) {
    const headers = this.authService.setAuthTokenHeader();   

    this.http.get<Admin>("http://localhost:8080/Admins/", { headers }).subscribe(data=>{
      console.log(data);
    })
   }
}
