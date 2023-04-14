import { Component } from '@angular/core';
import {Admin} from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent {
    date=Date.now();
    date2=this.date.toString();
    Adms:Admin = new Admin (0,"","","","","",this.date2,0,"","");
    constructor (public AdminService:AdminService, public router:Router, private route: ActivatedRoute) {
  }
 ngOnInit(){
      this.route.params.subscribe((params: Params)=>{
        const adminId = params['_id']
        this.AdminService.getOneAdmin(adminId).subscribe(data=>{
          this.Adms = data;
          console.log(this.Adms);
      });
      })
      }  
  getOne(){
    this.AdminService.getOneAdmin(this.Adms._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/Admins');
    })
  } 
}
