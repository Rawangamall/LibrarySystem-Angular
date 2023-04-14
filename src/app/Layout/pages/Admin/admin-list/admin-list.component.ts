import { Component } from '@angular/core';
import{Admin} from 'src/app/models/admin';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent {

  Adms:Admin[]=[];

  constructor(public AdminService :AdminService , public router:Router){}
  deleteAdmin(id:number){
    if(confirm('Are you sure you want to delete this Admin?')){
      this.AdminService.deleteAdminByID(id).subscribe(data=>{
        this.router.navigateByUrl("/Admins");
        console.log(data);
      });
    }
  }
 
  ngOnInit(){
    this.AdminService.getAllAdmins().subscribe(data=>{
      
      this.Adms= data;
    });
  }

}
