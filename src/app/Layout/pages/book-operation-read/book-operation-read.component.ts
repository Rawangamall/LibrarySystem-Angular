import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-book-operation-read',
  templateUrl: './book-operation-read.component.html',
  styleUrls: ['./book-operation-read.component.css']
})
export class BookOperationReadComponent {
  bookOper:Operation=new Operation(0,21,28,false,"");
  constructor (public bookOperService:OperationService, private route: ActivatedRoute, public router:Router) {
  }
  read(){
    this.route.params.subscribe((params: Params) => {
      const bookId = params['_id']
      this.bookOperService.readBook(bookId,this.bookOper).subscribe(data => {
        this.router.navigateByUrl('/allbook');
      })
    });
  }
}
