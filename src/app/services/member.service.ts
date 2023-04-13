
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Member }  from '../models/member.model';


@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseurl="http://localhost:8080/members";
  baseURL2 = 'http://localhost:8080/member/';
 

  getAllMembers(): Observable<Member[]>{
    return this.http.get<Member[]>(this.baseurl);
  }
  getOneMember(id:number){
    console.log(this.baseURL2+id);
    return this.http.get<Member>(this.baseURL2+id);
  }
  addMember(member:Member){
    console.log(member);
    return this.http.post<Member>(this.baseurl,member);
  }
  deleteMemberByID(id:number){
    location.reload();
    return this.http.delete(this.baseURL2+id);
  }
  updateMember(member:Member,id:number){
    
    console.log("serviceee",this.baseURL2+id,member);
    return this.http.put<Member>(this.baseURL2+id,member);
  }
  // searchForMember(searchKey: string, arg1: string, arg2: string) {
  //   throw new Error('Method not implemented.');
  // }

  searchForMember(searchKey: string, fullName: string): Observable<any> {
    const requestBody = {
      searchKey: searchKey,
      fullName: fullName,
     
    };
    return this.http.post(`${this.baseurl}/search`, requestBody);
  }



  
  constructor(public http:HttpClient) {
    this.http.get<Member>("http://localhost:8080/members").subscribe(data=>{
      // console.log(data);
    })
   }
  
}
