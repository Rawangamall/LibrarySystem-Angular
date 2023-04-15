import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Member } from 'src/app/models/member.model';
import { BookService } from 'src/app/services/book.service';
import { MemberService } from 'src/app/services/member.service';
import { AuthService } from 'src/app/services/auth/auth.service';

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
  members:Member[]=[];
  constructor(public bookService:BookService,public memberService:MemberService, public router:Router){
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
    // Count Number of Books
    this.bookService.getAllBooks().subscribe(data=>{
      this.books = data;
      return data;
    })
    // Count Number of Members
    this.memberService.getAllMembers().subscribe(data=>{
      this.members = data;
    });
  }
}