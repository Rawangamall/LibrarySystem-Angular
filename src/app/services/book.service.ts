import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Book }  from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  upload(file: File) {
    throw new Error('Method not implemented.');
  }
  baseurl="http://localhost:8080/Book";
  baseurlFiltered="http://localhost:8080/Book/filterBooks/get";
  baseurl2="http://localhost:8080/Book/add";
  baseurl3="http://localhost:8080/Book/update";
  newArrivedURL="http://localhost:8080/Book/newArrivedBooks";
  mostBorrowedURL="http://localhost:8080/Bookoper/mostBorrowedBooks";
  mostReadingURL="http://localhost:8080/Bookoper/mostReadingBooks";
  mostPopularURL="http://localhost:8080/Bookoper/mostPopularBooks";

  getAllBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseurl);
  }
  getFilteredBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.baseurlFiltered);
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
  addBook(book: Book){
    return this.http.post<Book>(this.baseurl2,book);
  }
  newArrivedBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.newArrivedURL);
  }
  mostPopularBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.mostPopularURL);
  }
  mostBorrowedBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.mostBorrowedURL);
  }
  mostReadingBooks(): Observable<Book[]>{
    return this.http.get<Book[]>(this.mostReadingURL);
  }

  constructor(public http:HttpClient, public router:Router) {
    //  this.http.get<Book>("http://localhost:8080/Book/2").subscribe(a=>
    //    console.log(a));
  }
}

