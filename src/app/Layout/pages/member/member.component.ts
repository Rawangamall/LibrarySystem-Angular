
import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member.model';
import { Router } from '@angular/router';
import { MemberService } from 'src/app/services/member.service';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css'],
  
})


export class MemberComponent {
  currentPage = 1;
   members: Member[] = []; 
  constructor(public memberService:MemberService, private authService: AuthService , public router:Router){
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
  ngOnInit(){
    this.memberService.getAllMembers().subscribe(data=>{
      // console.log("service",Object.values(data)[0]);
      this.members = data;
    
    });
  }
  
}
