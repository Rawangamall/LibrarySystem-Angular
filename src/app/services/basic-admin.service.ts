import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Basicadmin} from '../models/basicadmin';
import { Observable } from 'rxjs/internal/Observable';
//import { Basicadmin } from '../models/basicadmin';

@Injectable({
  providedIn: 'root'
})
export class BasicAdminService {
  baseURL11 = 'http://localhost:8080/Basics/';
  baseURL22 = 'http://localhost:8080/BasicAdmin/';
  

  getAllBasicAdmins(): Observable<Basicadmin[]>{
        return this.http.get<Basicadmin[]>(this.baseURL11);
      }
  getOneBasicAdmin(id:number): Observable<Basicadmin>{
        return this.http.get<Basicadmin>(this.baseURL22+id);
      }
  
  addBasicAdmin(badms:Basicadmin){
        return this.http.post<Basicadmin>(this.baseURL11,badms);
      }
  deleteBasicAdminByID(id:number){
        location.reload();
        return this.http.delete(this.baseURL22+id);
      }
  updateBasicAdmin(badm:Basicadmin,id:number){
        // console.log(this.baseURL2+id,adm);
         return this.http.put<Basicadmin>(this.baseURL22+id,badm);
       }
  constructor(public http:HttpClient) {
    this.http.get<Basicadmin>("http://localhost:8080/Basics").subscribe(data=>{
      console.log(data);
    })
   }
}
