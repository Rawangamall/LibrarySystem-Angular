import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Operation } from '../models/operation';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  baseurl="http://localhost:8080/Book/borrow/";
  baseurl1="http://localhost:8080/Book/read/";
  baseurl2="http://localhost:8080/BookOperation/";
  baseurl3="http://localhost:8080/Book/returnBorrowBook/";
  baseurl4="http://localhost:8080/Book/returnReadBook/";
  baseurl5="http://localhost:8080/makeSureOfReturnedRead/";

  borrowBook(id:number,bookOper: Operation){
    const headers = this.authService.setAuthTokenHeader();   
    console.log(id+"Aaaaaaa"+bookOper.operation)
    return this.http.post<Operation>(this.baseurl+id,bookOper, { headers });
  }
  readBook(id:number,bookOper: Operation){
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.post<Operation>(this.baseurl1+id,bookOper, { headers });
  }
  getAllBooksOper(): Observable<Operation[]>{
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.get<Operation[]>(this.baseurl2, { headers });
  }
  returnBookBorrow(id:number,bookOper: Operation){
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.put<Operation[]>(this.baseurl3+id,bookOper, { headers });
  }
  returnBookRead(id:number,bookOper: Operation){
<<<<<<< HEAD
    const headers = this.authService.setAuthTokenHeader();
    return this.http.put<Operation[]>(this.baseurl4+id,bookOper, { headers });
  }
=======
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.put<Operation[]>(this.baseurl4+id,bookOper, { headers });
  }
  
  returnAllBookRead(bookOper: Operation[]){
    const headers = this.authService.setAuthTokenHeader();   
    return this.http.put<Operation[]>(this.baseurl5,bookOper, { headers });
  }
  
>>>>>>> 6e2dd2f2f57d6b89e20b4cf5d3d31f0e643d6f6c
constructor(public http:HttpClient , public router:Router, private authService: AuthService) {
}
}