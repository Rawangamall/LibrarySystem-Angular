import { Component } from '@angular/core';
import {Admin} from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css']
})
export class AdminEditComponent {
  date=Date.now();
  date2=this.date.toString();
  adm:Admin=new Admin(0,"","","","","",this.date2,0,"","");
  constructor (public adminService:AdminService, public router:Router, public route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const admId = params['_id']
      this.adminService.getOneAdmin(admId).subscribe(data=>{
        this.adm = data;
      })
    });
  }
  update(){
    this.adminService.updateAdmin(this.adm,this.adm._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/Admins');
    })
  }  

}
