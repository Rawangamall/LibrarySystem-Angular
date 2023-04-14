import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent {
  date=Date.now();
  date2=this.date.toString();
  book:Book=new Book(0,"","","",0,true,"",0,"","",0,0,0,0,this.date2,this.date2,"");
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
  update(){
    this.bookService.updateBook(this.book,this.book._id).subscribe(data => {
      this.router.navigateByUrl('/bookdetails/'+this.book._id);
    })
  } 
}
