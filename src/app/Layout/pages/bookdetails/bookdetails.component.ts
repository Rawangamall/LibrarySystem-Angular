import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent {
  date=Date.now();
  date2=this.date.toString();
  book:Book=new Book(0,"","","",10,true,"",0,"",this.date2,0,0,0,0,this.date2,this.date2,"");
  constructor (public bookService:BookService, public router:Router, private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const bookId = params['id']
      this.bookService.getOneBook(bookId).subscribe(data=>{
        this.book = data;
      })
    });
  }
  getOne(){
    this.bookService.getOneBook(this.book._id).subscribe(data => {
      this.router.navigateByUrl('/Book');
    })
  } 
}
