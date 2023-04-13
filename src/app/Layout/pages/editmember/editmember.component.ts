
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';


@Component({
  selector: 'app-editmember',
  templateUrl: './editmember.component.html',
  styleUrls: ['./editmember.component.css']
})
export class EditmemberComponent 
 {
  date=Date.now();
  date2=this.date.toString();
  member:Member=new Member(0,"","","","",0,this.date2,"");
    constructor (public memeberService:MemberService, public router:Router, private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const memberId = params['_id'];
      console.log(memberId,"memid before");
      this.memeberService.getOneMember(memberId).subscribe(data=>{
       
        this.member = data;
        console.log("onemem",this.member);
      })
    });
  }
  update(){
    console.log("im hereee in update");
    
    this.memeberService.updateMember(this.member,this.member._id).subscribe(data => {
      console.log("im hereeee",data);
      this.router.navigateByUrl('/member');
    })
  } 
}

