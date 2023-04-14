
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/services/auth/auth.service';
import { Observable } from 'rxjs/internal/Observable';
import { Member }  from '../models/member.model';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseurl="http://localhost:8080/members";
  baseURL2 = 'http://localhost:8080/member/';
 

  getAllMembers(): Observable<Member[]>{
    const headers = this.authService.setAuthTokenHeader();   

    return this.http.get<Member[]>(this.baseurl, { headers });
  }
  getOneMember(id:number){
    const headers = this.authService.setAuthTokenHeader();   

    console.log(this.baseURL2+id);
    return this.http.get<Member>(this.baseURL2+id, { headers });
  }
  addMember(member:Member){
    const headers = this.authService.setAuthTokenHeader();   

    console.log(member);
    return this.http.post<Member>(this.baseurl,member, { headers });
  }
  deleteMemberByID(id:number){
    const headers = this.authService.setAuthTokenHeader();   

    location.reload();
    return this.http.delete(this.baseURL2+id, { headers });
  }
  updateMember(member:Member,id:number){
    const headers = this.authService.setAuthTokenHeader();   

    console.log("serviceee",this.baseURL2+id,member);
    return this.http.put<Member>(this.baseURL2+id,member, { headers });
  }
 

  searchForMember(searchKey: string, fullName: string): Observable<any> {
    const requestBody = {
      searchKey: searchKey,
      fullName: fullName,
     
    };
    const headers = this.authService.setAuthTokenHeader();   

    return this.http.post(`${this.baseurl}/search`, requestBody , { headers });
  }

  
  constructor(public http:HttpClient , private authService: AuthService) {
    const headers = this.authService.setAuthTokenHeader();   

    this.http.get<Member>("http://localhost:8080/members", { headers }).subscribe(data=>{
      // console.log(data);
    })
   }
  
}
