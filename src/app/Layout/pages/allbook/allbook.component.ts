import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-allbook',
  templateUrl: './allbook.component.html',
  styleUrls: ['./allbook.component.css']
})
export class AllbookComponent {
  books:Book[]=[];
  searchText='';
  searchKey = '';
  currentPage = 1;
  constructor(public bookService:BookService, public router:Router){
  }
  getPages(): number[] {
    const pageCount = Math.ceil(this.books.length / 6);
    if (pageCount === 0) {
      return [];
    }
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return pages;
  }
  delete(id:number){
    if(confirm('Are you sure you want to delete this book?')){
      this.bookService.deleteBook(id).subscribe(response=>
        console.log(response));
    }
  }
  search() {
    this.bookService.searchForBook(this.searchKey, '','','').subscribe(
      (response) => {
        this.books = response.data;
      },
      (error) => {
        if (error.status === 500) {
          // if the status code is 500, extract the error message from the response body
          const errorMessage = error.error.message;
          console.error(errorMessage);
          // clear the members array to remove the previous search results
          this.books = [];
        } else {
          console.error(error);
        }
      }
    );
  }

  ngOnInit(){
    this.bookService.getAllBooks().subscribe(data=>{
      this.books = data;
      return data;
    })
  }
}
