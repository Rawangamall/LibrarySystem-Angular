import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BookOperations } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-book-operation-borrow',
  templateUrl: './book-operation-borrow.component.html',
  styleUrls: ['./book-operation-borrow.component.css']
})
export class BookOperationBorrowComponent {
  bookOper:BookOperations=new BookOperations(0,60,1,false,"");
  constructor (public bookOperService:OperationService, private route: ActivatedRoute, public router:Router) {
  }
  borrow(){
    this.route.params.subscribe((params: Params) => {
      const bookId = params['id']
      console.log(bookId);
      this.bookOperService.borrowBook(bookId,this.bookOper).subscribe(data => {
        this.router.navigateByUrl('/allbook');
      })
    });
  }
}
