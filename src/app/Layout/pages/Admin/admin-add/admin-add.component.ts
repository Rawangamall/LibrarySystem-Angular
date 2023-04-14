import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin';
import { AdminService } from 'src/app/services/admin.service';


@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.css']
})
export class AdminAddComponent {
  date=Date.now();
  date2=this.date.toString();
  adm : Admin= new Admin(0,"","","","","",this.date2,0,"","");
  constructor(public AdminService:AdminService, public router:Router){}
  save(){
    this.AdminService.addAdmin(this.adm).subscribe(data =>{
      console.log(data);
      this.adm =data;
      this.router.navigateByUrl("/Admins");
    });
  }
}
