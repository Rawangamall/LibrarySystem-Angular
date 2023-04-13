
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  
})


export class MemberComponent {
  searchKey = '';
  currentPage = 1;
   pageCount=1;
   members: Member[] = []; 
  constructor(public memberService:MemberService, public router:Router){
  }
  delete(id:number){
    if(confirm('Are you sure you want to delete this book?')){
      this.memberService.deleteMemberByID(id).subscribe(response=>
        console.log(response));
       // this.router.navigateByUrl('/members');
    }
  }
  getPages(): number[] {
    const pageCount = Math.ceil(this.members.length / 6);
    if (pageCount === 0) {
      return [];
    }
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return pages;
  }

  search() {
    this.memberService.searchForMember(this.searchKey, '').subscribe(
      (response) => {
        this.members = response.data;
      },
      (error) => {
        if (error.status === 500) {
          // if the status code is 500, extract the error message from the response body
          const errorMessage = error.error.message;
          console.error(errorMessage);
          // clear the members array to remove the previous search results
          this.members = [];
        } else {
          console.error(error);
        }
      }
    );
  }

  ngOnInit(){
    this.memberService.getAllMembers().subscribe(data=>{
      // console.log("service",Object.values(data)[0]);
      this.members = data;
    
    });
  }
  
}


  
 