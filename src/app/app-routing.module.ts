import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import dashboard
import { DashboardComponent } from './Layout/pages/dashboard/dashboard.component';
//import member
import { MemberComponent } from './Layout/pages/member/member.component';
//import editmember
import { EditmemberComponent } from './Layout/pages/editmember/editmember.component';
//import admin
import { AdminComponent } from './Layout/pages/admin/admin.component';
//import employee
import { EmployeeComponent } from './Layout/pages/employee/employee.component';
//import profile
import { ProfileComponent } from './Layout/pages/profile/profile.component';
//import allbook
import { AllbookComponent } from './Layout/pages/allbook/allbook.component';
//import bookavilablty
import { BookavilabltyComponent } from './Layout/pages/bookavilablty/bookavilablty.component';
//import EditbookComponent
import { EditbookComponent } from './Layout/pages/editbook/editbook.component';
//import BookdetailsComponent
import { BookdetailsComponent } from './Layout/pages/bookdetails/bookdetails.component';
//import OperationComponent
import { OperationComponent } from './Layout/pages/operation/operation.component';
//import Error400Component
import { Error400Component } from './Layout/pages/errors/error400/error400.component';
//import Error404Component
import { Error404Component } from './Layout/pages/errors/error404/error404.component';
//import Error403Component
import { Error403Component } from './Layout/pages/errors/error403/error403.component';
//import Error500Component
import { Error500Component } from './Layout/pages/errors/error500/error500.component';
//import Error503Component
import { Error503Component } from './Layout/pages/errors/error503/error503.component';


const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'member', component: MemberComponent },
  { path: 'editmember', component: EditmemberComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'allbook', component: AllbookComponent },
  { path: 'bookavilablty', component: BookavilabltyComponent },
  { path: 'bookedit', component: EditbookComponent },
  { path: 'bookdetails', component: BookdetailsComponent },
  { path: 'operation', component: OperationComponent },
  { path: 'error400', component: Error400Component },
  { path: 'error404', component: Error404Component },
  { path: 'error403', component: Error403Component },
  { path: 'error500', component: Error500Component },
  { path: 'error503', component: Error503Component },
  






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
