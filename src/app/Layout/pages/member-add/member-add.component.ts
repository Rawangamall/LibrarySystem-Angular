
import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css'],
  
})
export class MemberAddComponent {
  date=Date.now();
  date2=this.date.toString();
  member:Member=new Member(5,"manar","","","",0,this.date2,"");
    constructor(public memberService:MemberService, public router:Router){}
  save(){
    this.memberService.addMember(this.member).subscribe(data =>{
      console.log(data);
      this.member=data;
      this.router.navigateByUrl("/member");
    });
  }
}
