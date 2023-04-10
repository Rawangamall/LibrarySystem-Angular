import { Injectable } from '@angular/core';
import { BookOperations } from '../models/operation';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
  baseurl="http://localhost:8080/Book/borrow/";
  baseurl1="http://localhost:8080/Book/read/";
  baseurl2="http://localhost:8080/BookOperation/";
  baseurl3="http://localhost:8080/Book/returnBorrowBook/";
  baseurl4="http://localhost:8080/Book/returnReadBook/";

  borrowBook(id:number,bookOper: BookOperations){
    console.log(id+"Aaaaaaa"+bookOper.operation)
    return this.http.post<BookOperations>(this.baseurl+id,bookOper);
  }
  readBook(id:number,bookOper: BookOperations){
    return this.http.post<BookOperations>(this.baseurl1+id,bookOper);
  }
  getAllBooksOper(): Observable<BookOperations[]>{
    return this.http.get<BookOperations[]>(this.baseurl2);
  }
  returnBookBorrow(id:number,bookOper: BookOperations){
    return this.http.put<BookOperations[]>(this.baseurl3+id,bookOper);
  }
  returnBookRead(id:number,bookOper: BookOperations){
    return this.http.put<BookOperations[]>(this.baseurl4+id,bookOper);
  }
  constructor(public http:HttpClient, public router:Router) {}
}