import {Component} from '@angular/core';
import {Basicadmin} from 'src/app/models/basicadmin';
import {BasicAdminService} from 'src/app/services/basic-admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-ba-details',
  templateUrl: './ba-details.component.html',
  styleUrls: ['./ba-details.component.css']
})
export class BADetailsComponent {
  date=Date.now();
  date2=this.date.toString();
  BAdms:Basicadmin = new Basicadmin(0,"","","","","",this.date2,0,"","");
  constructor (public BasicAdminService:BasicAdminService, public router:Router, private route: ActivatedRoute) {
}
ngOnInit(){
  this.route.params.subscribe((params: Params)=>{
    const badminId = params['_id']
    this.BasicAdminService.getOneBasicAdmin(badminId).subscribe(data=>{
      this.BAdms = data;
      console.log(this.BAdms);
  });
  })
  }  
getOne(){
this.BasicAdminService.getOneBasicAdmin(this.BAdms._id).subscribe(data => {
  console.log(data);
  this.router.navigateByUrl('/BasicAdmin');
})
} 
}



 