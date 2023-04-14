import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  date=Date.now();
  date2=this.date.toString();
  emp:Employee=new Employee(0,"","","","","",this.date2,0,"");
  constructor (public employeeService:EmployeeService, public router:Router, private route: ActivatedRoute) {
  }
  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      const empId = params['id']
      this.employeeService.getOneEmployee(empId).subscribe(data=>{
        this.emp = data;
        
      })
    });
  }
  update(){
    this.employeeService.getOneEmployee(this.emp._id).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/Employees');
    })
  } 
}
