import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent {
  books:Book[]=[];
  constructor(public bookService:BookService, public router:Router){
  }
  delete(id:number){
    if(confirm('Are you sure you want to delete this book?')){
      this.bookService.deleteBook(id).subscribe(response=>
        console.log(response));
    }
  }
  ngOnInit(){
    this.bookService.getAllBooks().subscribe(data=>{
      this.books = data;
      return data;
    })
  }
}
