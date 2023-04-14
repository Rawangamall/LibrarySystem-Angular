import { Component } from '@angular/core';
import {Basicadmin} from 'src/app/models/basicadmin';
import { Router } from '@angular/router';
import { BasicAdminService} from 'src/app/services/basic-admin.service';
@Component({
  selector: 'app-basic-admin-list',
  templateUrl: './basic-admin-list.component.html',
  styleUrls: ['./basic-admin-list.component.css']
})
export class BasicAdminListComponent {
  BAdms:Basicadmin[]=[];

  constructor(public BasicAdminService :BasicAdminService , public router:Router){}
  deleteBasicAdmin(id:number){
    if(confirm('Are you sure you want to delete this Basic Admin?')){
      this.BasicAdminService.deleteBasicAdminByID(id).subscribe(data=>{
        this.router.navigateByUrl("/BasicAdmin");
        console.log(data);
      });
    }
  }
 
  ngOnInit(){
    this.BasicAdminService.getAllBasicAdmins().subscribe(data=>{
      
      this.BAdms= data;
    });
  }

}
