
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Book }  from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseurl="http://localhost:8080/Book";
  baseurl2="http://localhost:8080/Book/add";
  baseurl3="http://localhost:8080/Book/update";
  
  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseurl);
  }
  getOneBook(id:number): Observable<Book>{
    return this.http.get<Book>(this.baseurl+"/"+id);
  }
  deleteBook(id:number){
    location.reload();
    return this.http.delete<Book>(this.baseurl+"/"+id);
  }
  updateBook(book:Book, id:number){
    return this.http.put<Book>(this.baseurl3+"/"+id,book);
  }
  
  addBook(
book: Book){
    return this.http.post<Book>(this.baseurl2,book);
  }

  constructor(public http:HttpClient, public router:Router) {
    this.http.get<Book>("http://localhost:8080/Book/2").subscribe(a=>
      console.log(a));
  }
}

