import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent {
  date=Date.now();
  date2=this.date.toString();
  emp:Employee=new Employee(0,"","","","","",this.date2,0,"");
  constructor (public employeeService:EmployeeService, private authService: AuthService , public router:Router, private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const empId = params['_id']
      this.employeeService.getOneEmployee(empId).subscribe(data=>{
        this.emp = data;
      })
    });
  }
  update(){
    this.employeeService.updateEmployee(this.emp,this.emp._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('profile/'+this.emp._id);
    })
  }  
}
