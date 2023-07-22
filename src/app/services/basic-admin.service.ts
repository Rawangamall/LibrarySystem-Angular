import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Basicadmin} from '../models/basicadmin';
import { Observable } from 'rxjs/internal/Observable';
//import { Basicadmin } from '../models/basicadmin';
import { AuthService } from '../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAdminService {
  baseURL11 = 'http://localhost:8080/Basics/';
  baseURL22 = 'http://localhost:8080/BasicAdmin/';
  

  getAllBasicAdmins(): Observable<Basicadmin[]>{
    const headers = this.authService.setAuthTokenHeader();   

        return this.http.get<Basicadmin[]>(this.baseURL11 , { headers });
      }
  getOneBasicAdmin(id:number): Observable<Basicadmin>{
    const headers = this.authService.setAuthTokenHeader();   
console.log(id);
        return this.http.get<Basicadmin>(this.baseURL22+id , { headers });
      }
  
  addBasicAdmin(badms:Basicadmin){
        const headers = this.authService.setAuthTokenHeader();   

        return this.http.post<Basicadmin>(this.baseURL11,badms , { headers });
      }
  deleteBasicAdminByID(id:number){
        const headers = this.authService.setAuthTokenHeader();   

        location.reload();
        return this.http.delete(this.baseURL22+id , { headers });
      }

  updateBasicAdmin(badm:Basicadmin,id:number){
    const headers = this.authService.setAuthTokenHeader();   
         return this.http.put<Basicadmin>(this.baseURL22+id,badm , { headers });
         
       }

  constructor(public http:HttpClient , private authService: AuthService) {
    const headers = this.authService.setAuthTokenHeader();   

    this.http.get<Basicadmin>("http://localhost:8080/Basics", { headers }).subscribe(data=>{
      console.log(data);
    })
   }
}
