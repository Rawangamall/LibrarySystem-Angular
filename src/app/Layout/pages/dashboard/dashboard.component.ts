import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  newArrivedBooks:Book[]=[];
  mostPopularBooks:any[]=[];
  mostBorrowedBooks:any[]=[];
  mostReadingBooks:any[]=[];
  books:Book[]=[];
  constructor(public bookService:BookService, public router:Router){
  }
  ngOnInit(){
    // New Arrived Books
    this.bookService.newArrivedBooks().subscribe(data=>{
      this.newArrivedBooks = data;
      return data;
    })
    // Most Popular Books
    this.bookService.mostPopularBooks().subscribe(data=>{
      this.mostPopularBooks = data;
      return data;
    });
    // Most Borrowed Books
    this.bookService.mostBorrowedBooks().subscribe(data=>{
      this.mostBorrowedBooks = data;
      return data;
    })
    // Most Reading Books
    this.bookService.mostReadingBooks().subscribe(data=>{
      this.mostReadingBooks = data;
      return data;
    })
    // Count of Books
    this.bookService.getAllBooks().subscribe(data=>{
      this.books = data;
      return data;
    })
  }
}