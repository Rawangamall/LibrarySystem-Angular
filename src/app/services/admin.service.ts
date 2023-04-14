import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin} from '../models/admin';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = 'http://localhost:8080/Admins/';
  baseURL2 = 'http://localhost:8080/Admin/';
  

  getAllAdmins(): Observable<Admin[]>{
        return this.http.get<Admin[]>(this.baseURL);
      }
  getOneAdmin(id:number): Observable<Admin>{
        return this.http.get<Admin>(this.baseURL2+id);
      }
  
  addAdmin(adm:Admin){
        return this.http.post<Admin>(this.baseURL,adm);
      }
  deleteAdminByID(id:number){
        location.reload();
        return this.http.delete(this.baseURL2+id);
      }
  updateAdmin(adm:Admin,id:number){
        // console.log(this.baseURL2+id,adm);
         return this.http.put<Admin>(this.baseURL2+id,adm);
       }
  constructor(public http:HttpClient) {
    this.http.get<Admin>("http://localhost:8080/Admins/").subscribe(data=>{
      console.log(data);
    })
   }
}
