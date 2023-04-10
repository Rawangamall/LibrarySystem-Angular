import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  date=Date.now();
  date2=this.date.toString();
  book:Book=new Book(0,"","","",0,true,"",0,"","",0,0,0,0,this.date2,this.date2,"");
  constructor (public bookService:BookService, public router:Router) {
  }
  
  save(){
    console.log("before");
    this.bookService.addBook(this.book).subscribe(data => {
      console.log("after",data);
      this.router.navigateByUrl('/allbook');
    })
  }
}
