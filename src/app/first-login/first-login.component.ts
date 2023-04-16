import { Component , ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { EmployeeService } from 'src/app/services/employee.service';
import { FirstLoginService } from 'src/app/services/first-login.service';
import { Admin } from '../models/admin';
import { Basicadmin } from 'src/app/models/basicadmin';
import { Employee } from 'src/app/models/employee';

import { BasicAdminService } from 'src/app/services/basic-admin.service';

@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent {
  password: string ='';
  errorMessage: string = '';

  validatePassword() {
    const passwordInput = this.password;
  
    const passwordRegex = /^(?=.*\d).{8,}$/;
    const isValidPassword = passwordRegex.test(passwordInput);
    const passField = document.getElementsByName('password')[0] ;

    if (!isValidPassword) {
      passField.classList.remove('is-valid');
      passField.classList.add('is-invalid');

      this.errorMessage = 'Enter a valid password (at least 8 characters long and contains a digit';
    }else{
         passField.classList.add('is-valid');
      passField.classList.remove('is-invalid');  

      this.errorMessage='';
    }
  }
    @ViewChild('passwordInput', { static: true }) passwordInput!: ElementRef;
 
 role = this.authService.getRole();
 userId = Number(this.authService.getID());

    adm:Admin=new Admin(0,"","","","","","",0,"","");
    badm:Basicadmin =new Basicadmin (0,"","","","","","",0,"","");
    emp:Employee=new Employee(0,"","","","","","",0,"");

  constructor(private authService: AuthService , private router: Router ,public  BasicAdminService: BasicAdminService, public adminService:AdminService , public firstloginServices:FirstLoginService ,public route: ActivatedRoute , public EmployeeServices: EmployeeService) {}

  ngOnInit(){

    //}

  }
  update(){
    if(this.role == "Admin"){
    this.firstloginServices.updateAdmin(this.adm,this.adm._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('Admin/details/'+this.adm._id);
    })
  }
  else if(this.role == "BasicAdmin"){
    this.firstloginServices.updateBasicAdmin(this.badm,this.userId).subscribe(data => {
      console.log(data);
    })
   }

  else if(this.role == "Employee"){
    this.firstloginServices.updateEmp(this.emp,this.userId).subscribe(data => {
      console.log(data);
    })
   }
  }  

  getData(){
    if(this.role == "Admin"){
      this.adminService.getOneAdmin(this.userId).subscribe(data=>{
        data.password = this.password;
        this.adm = data;
      })
    }
    else if(this.role == "BasicAdmin"){
      console.log("here"+"!!"+this.password);

      this.BasicAdminService.getOneBasicAdmin(this.userId).subscribe(data=>{
        data.password = this.password;
        console.log(data.password);
        this.badm = data;
      })
  }
  else if(this.role == "Employee"){
    console.log("here"+"!!"+this.password);

    this.EmployeeServices.getOneEmployee(this.userId).subscribe(data=>{
      data.password = this.password;
      console.log(data.password);
      this.emp = data;
    })
}
}
  onSubmit() {

    if(this.errorMessage.length == 0){
      
      this.getData();
      this.update();

    // this.authService.logout();
    // this.router.navigate(['/login']);
      
      }
    
    }
}
