import { Component } from '@angular/core';
//import router
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardapp',
  templateUrl: './dashboardapp.component.html',
  styleUrls: ['./dashboardapp.component.css']
})
export class DashboardappComponent  {


  constructor(
    //inject router
    public router:Router
  ) { }
  
 
 

}
