
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Member } from 'src/app/models/member.model';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-member-profile',
  templateUrl: './member-profile.component.html',
  styleUrls: ['./member-profile.component.css']
})
export class MemberProfileComponent {
  date=Date.now();
  date2=this.date.toString();
  member:Member=new Member(0,"","","","",0,this.date2,"");
    constructor (public memeberService:MemberService, public router:Router, private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const memberId = params['id'];
      // console.log(memberId);
      this.memeberService.getOneMember(memberId).subscribe(data=>{
      // console.log(data);
        this.member = data;
      })
    });
  }
  // NavUpdateComponent(){
  //   this.memeberService.getOneMember(this.member._id).subscribe(data => {
  //     console.log(data);
  //     this.router.navigateByUrl('/member');
  //   })
  // } 
}