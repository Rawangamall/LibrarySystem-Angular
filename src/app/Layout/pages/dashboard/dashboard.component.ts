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
  mostBorrowedBooks:Book[]=[];
  constructor(public bookService:BookService, public router:Router){
  }
  ngOnInit(){
    this.bookService.newArrivedBooks().subscribe(data=>{
      this.newArrivedBooks = data;
      return data;
    });
    this.bookService.mostBorrowedBooks().subscribe(data=>{
      this.mostBorrowedBooks = data;
      return data;
    })
  }
}