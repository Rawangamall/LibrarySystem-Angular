import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-filtered-books',
  templateUrl: './filtered-books.component.html',
  styleUrls: ['./filtered-books.component.css']
})
export class FilteredBooksComponent {
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
      this.bookService.getFilteredBooks().subscribe(data=>{
        this.books = data;
        return data;
      });
    }
}