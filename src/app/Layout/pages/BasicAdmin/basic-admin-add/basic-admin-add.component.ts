import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Basicadmin } from 'src/app/models/basicadmin';
import { BasicAdminService } from 'src/app/services/basic-admin.service';

@Component({
  selector: 'app-basic-admin-add',
  templateUrl: './basic-admin-add.component.html',
  styleUrls: ['./basic-admin-add.component.css']
})
export class BasicAdminAddComponent {
  date=Date.now();
  date2=this.date.toString();
  badm :Basicadmin= new Basicadmin(0,"","","","","",this.date2,0,"","");
  constructor(public BasicAdminService: BasicAdminService, public router:Router){}
  save(){
    this.BasicAdminService.addBasicAdmin(this.badm).subscribe(data =>{
      console.log(data);
      this.badm =data;
      this.router.navigateByUrl("/BasicAdmin");
    });
  }
}
