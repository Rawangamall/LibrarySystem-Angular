import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Basicadmin } from 'src/app/models/basicadmin';
import { BasicAdminService } from 'src/app/services/basic-admin.service';

@Component({
  selector: 'app-basic-admin-edit',
  templateUrl: './basic-admin-edit.component.html',
  styleUrls: ['./basic-admin-edit.component.css']
})
export class BasicAdminEditComponent {
  date=Date.now();
  date2=this.date.toString();
  badm:Basicadmin =new Basicadmin (0,"","","","","",this.date2,0,"","");
  constructor (public  BasicAdminService: BasicAdminService, public router:Router, public route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const admId = params['_id']
      this. BasicAdminService.getOneBasicAdmin(admId).subscribe(data=>{
        this.badm = data;
      })
    });
  }
  update(){
    this.BasicAdminService.updateBasicAdmin(this.badm,this.badm._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/BasicAdmin');
    })
  }  

}
