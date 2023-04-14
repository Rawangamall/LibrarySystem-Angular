import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { Operation } from 'src/app/models/operation';
import { MemberService } from 'src/app/services/member.service';
import { OperationService } from 'src/app/services/operation.service';

@Component({
  selector: 'app-book-operation-borrow',
  templateUrl: './book-operation-borrow.component.html',
  styleUrls: ['./book-operation-borrow.component.css']
})
export class BookOperationBorrowComponent {
  bookOper:Operation=new Operation(0,60,1,false,"");
  //members: Member[] = [];
  constructor (public bookOperService:OperationService, private route: ActivatedRoute,
    public router:Router, public memberService:MemberService,public http:HttpClient) {
  }
  borrow(){
    //this.http.get('/Book/borrow/:_id').subscribe(
     // (data) => {
        // handle successful response
        this.route.params.subscribe((params: Params) => {
          const bookId = params['id']
          console.log(bookId);
          this.bookOperService.borrowBook(bookId,this.bookOper).subscribe(data => {
            this.router.navigateByUrl('/allbook');
          })
        });
     /* },
      (error) => {
        if (error.status === 500) {
          this.router.navigate(['/error500']);
        } else if (error.status ===404) {
          this.router.navigate(['/error404']);
        }
        else if (error.status ===403) {
          this.router.navigate(['/error403']);
        }
        else if (error.status ===400) {
          this.router.navigate(['/error400']);
        }
        else if (error.status ===503) {
          this.router.navigate(['/error503']);
        }
      }
    );*/
    
  }
  /*ngOnInit(){
    this.memberService.getAllMembers().subscribe(data=>{
      this.members = data;
    
    });
  }*/
}
