import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import dashboard
import { DashboardComponent } from './Layout/pages/dashboard/dashboard.component';  
//import member
import { MemberComponent } from './Layout/pages/member/member.component';
//import editmember
import { EditmemberComponent } from './Layout/pages/editmember/editmember.component';
//import addmember
import { MemberAddComponent } from './Layout/pages/member-add/member-add.component';
//import viewmember
import { MemberProfileComponent } from './Layout/pages/member-profile/member-profile.component';

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
import { BookAddComponent } from './Layout/pages/book-add/book-add.component';
import { EmployeeAddComponent } from './Layout/pages/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Layout/pages/employee-edit/employee-edit.component';
//import login
import { LoginappComponent } from './loginapp/loginapp.component';
import { BookOperationBorrowComponent } from './Layout/pages/book-operation-borrow/book-operation-borrow.component';
import { BookOperationReadComponent } from './Layout/pages/book-operation-read/book-operation-read.component';
import { OwnerBAadmin , OwnerBAadminEmp ,BAdminEmp , BAadmin} from 'src/app/services/auth/auth.guard';


const routes: Routes = [
  { path: '', component: DashboardComponent ,canActivate: [OwnerBAadminEmp]},
  { path: 'member', component: MemberComponent ,canActivate: [OwnerBAadminEmp]},
  { path: 'editmember/:_id', component: EditmemberComponent ,canActivate: [BAdminEmp]},
  { path: 'member-add', component: MemberAddComponent ,canActivate: [BAdminEmp]},
  { path: 'memberProfile/:id', component: MemberProfileComponent ,canActivate: [BAdminEmp]},
  { path: 'admin', component: AdminComponent },
  { path: 'employee', component: EmployeeComponent ,canActivate: [OwnerBAadmin] },
  { path: 'employee/add', component: EmployeeAddComponent ,canActivate: [OwnerBAadmin]},
  { path: 'profile/:_id', component: ProfileComponent ,canActivate: [OwnerBAadminEmp]},
  { path: 'allbook', component: AllbookComponent ,canActivate: [OwnerBAadminEmp]},
  { path: 'Book/add', component: BookAddComponent ,canActivate: [BAadmin]},
  { path: 'employeeEdit/:_id', component: EmployeeEditComponent ,canActivate: [OwnerBAadmin]},
  { path: 'bookavilablty', component: BookavilabltyComponent },
  { path: 'bookedit/:id', component: EditbookComponent ,canActivate: [BAadmin]},
  { path: 'bookdetails/:id', component: BookdetailsComponent ,canActivate: [OwnerBAadminEmp]},
  { path: 'operation', component: OperationComponent },
  { path: 'Book/read/:_id', component: BookOperationReadComponent },
  { path: 'Book/borrow/:id', component: BookOperationBorrowComponent },
  { path: 'error400', component: Error400Component },
  { path: 'error404', component: Error404Component },
  { path: 'error403', component: Error403Component },
  { path: 'error500', component: Error500Component },
  { path: 'error503', component: Error503Component },
  { path: 'login', component: LoginappComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
