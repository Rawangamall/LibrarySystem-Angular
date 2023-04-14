import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  constructor(public employeeService: EmployeeService, private authService: AuthService, public router:Router){}
  currentPage = 1;
  searchKey = '';
  date=Date.now();
  date2=this.date.toString();
  emp:Employee=new Employee(0,"","","","","",this.date2,0,"");
  searchText='';
  save(){
    this.employeeService.addEmployee(this.emp).subscribe(data =>{
      console.log(data);
      this.emp=data;
      this.router.navigateByUrl("/Employees");
    });
  }
  emps: Employee[]=[];
  getPages(): number[] {
    const pageCount = Math.ceil(this.emps.length / 6);
    if (pageCount === 0) {
      return [];
    }
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return pages;
  }
  deleteEmployee(id:number){
    if(confirm('Are you sure you want to delete this employee?')){
      this.employeeService.deleteEmployeeByID(id).subscribe(data=>{
        this.router.navigateByUrl("/Employees");
        console.log(data);
      });
    }
  }

  search() {
    this.employeeService.searchForMember(this.searchKey, '','').subscribe(
      (response) => {
        this.emps = response.data;
      },
      (error) => {
        if (error.status === 500) {
          // if the status code is 500, extract the error message from the response body
          const errorMessage = error.error.message;
          console.error(errorMessage);
          // clear the members array to remove the previous search results
          this.emps = [];
        } else {
          console.error(error);
        }
      }
    );
  }
  
  ngOnInit(){
    this.employeeService.getAllEmployees().subscribe(data=>{
      this.emps = data;
    });
}
} 
