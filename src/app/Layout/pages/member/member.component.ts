
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
  ngOnInit(){
    this.memberService.getAllMembers().subscribe(data=>{
      // console.log("service",Object.values(data)[0]);
      this.members = data;
    
    });
  }
  
}
