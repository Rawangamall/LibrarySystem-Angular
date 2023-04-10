import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Operation } from 'src/app/models/operation';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent {
  bookOper:Operation[]=[];
  constructor(public bookService:OperationService, public router:Router){
  }
  ngOnInit(){
    this.bookService.getAllBooksOper().subscribe(data=>{
      this.bookOper = data;
      return data;
    })
  }
  returnBorrowBook(id:number, bookOper:Operation){
    this.bookService.returnBookBorrow(id,bookOper).subscribe(data=>{
      this.bookOper = data;
      location.reload();
      return data;
    })
  }
  returnReadBook(id:number, bookOper:Operation){
    this.bookService.returnBookRead(id,bookOper).subscribe(data=>{
      this.bookOper = data;
      location.reload();
      return data;
    })
  }
}
