import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Operation } from '../models/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  baseurl="http://localhost:8080/Book/borrow/";
  baseurl1="http://localhost:8080/Book/read/";
  baseurl2="http://localhost:8080/BookOperation/";
  baseurl3="http://localhost:8080/Book/returnBorrowBook/";
  baseurl4="http://localhost:8080/Book/returnReadBook/";

  borrowBook(id:number,bookOper: Operation){
    console.log(id+"Aaaaaaa"+bookOper.operation)
    return this.http.post<Operation>(this.baseurl+id,bookOper);
  }
  readBook(id:number,bookOper: Operation){
    return this.http.post<Operation>(this.baseurl1+id,bookOper);
  }
  getAllBooksOper(): Observable<Operation[]>{
    return this.http.get<Operation[]>(this.baseurl2);
  }
  returnBookBorrow(id:number,bookOper: Operation){
    return this.http.put<Operation[]>(this.baseurl3+id,bookOper);
  }
  returnBookRead(id:number,bookOper: Operation){
    return this.http.put<Operation[]>(this.baseurl4+id,bookOper);
  }
  constructor(public http:HttpClient, public router:Router) {}
}