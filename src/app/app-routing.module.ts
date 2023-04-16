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
import { AdminListComponent } from './Layout/pages/Admin/admin-list/admin-list.component';
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
import { AdminAddComponent } from './Layout/pages/Admin/admin-add/admin-add.component';
import { AdminDetailsComponent } from './Layout/pages/Admin/admin-details/admin-details.component';
import { BasicAdminListComponent } from './Layout/pages/BasicAdmin/basic-admin-list/basic-admin-list.component';
import { BasicAdminAddComponent } from './Layout/pages/BasicAdmin/basic-admin-add/basic-admin-add.component';
import { BADetailsComponent } from './Layout/pages/BasicAdmin/BasicAdmin-details/ba-details.component';
import { AdminEditComponent } from './Layout/pages/Admin/admin-edit/admin-edit.component';
import { BasicAdminEditComponent } from './Layout/pages/BasicAdmin/basic-admin-edit/basic-admin-edit.component';
import { BookAddComponent } from './Layout/pages/book-add/book-add.component';
import { EmployeeAddComponent } from './Layout/pages/employee-add/employee-add.component';
import { EmployeeEditComponent } from './Layout/pages/employee-edit/employee-edit.component';
//import login
import { LoginappComponent } from './loginapp/loginapp.component';
import { BookOperationBorrowComponent } from './Layout/pages/book-operation-borrow/book-operation-borrow.component';
import { BookOperationReadComponent } from './Layout/pages/book-operation-read/book-operation-read.component';
import { FilteredBooksComponent } from './Layout/pages/filtered-books/filtered-books.component';
import {Owner,OwnerBA , OwnerBAadmin , OwnerBAadminEmp ,BAdminEmp , BAadmin} from 'src/app/services/auth/auth.guard';
import {ValidGuard} from 'src/app/services/valid.guard';
import { FirstLoginComponent } from './first-login/first-login.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginappComponent },
  { path: 'firstlogin/:_id', component: FirstLoginComponent },

  { path: 'dashboard', component: DashboardComponent ,canActivate: [OwnerBAadminEmp , ValidGuard]},
  { path: 'member', component: MemberComponent ,canActivate: [OwnerBAadminEmp , ValidGuard]},
  { path: 'editmember/:_id', component: EditmemberComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'member-add', component: MemberAddComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'memberProfile/:id', component: MemberProfileComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'employee', component: EmployeeComponent ,canActivate: [OwnerBAadmin , ValidGuard]},
  { path: 'employee/add', component: EmployeeAddComponent ,canActivate: [BAadmin , ValidGuard]},
  { path: 'profile/:id', component: ProfileComponent ,canActivate: [OwnerBAadminEmp , ValidGuard]},
  { path: 'allbook', component: AllbookComponent ,canActivate: [OwnerBAadminEmp , ValidGuard]},
  { path: 'Book/filterBooks/get', component: FilteredBooksComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'Book/add', component: BookAddComponent ,canActivate: [OwnerBAadmin , ValidGuard]},
  { path: 'employeeEdit/:_id', component: EmployeeEditComponent ,canActivate: [OwnerBAadminEmp , ValidGuard]},
  { path: 'bookavilablty', component: BookavilabltyComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'bookedit/:id', component: EditbookComponent ,canActivate: [BAadmin , , ValidGuard]},
  { path: 'bookdetails/:id', component: BookdetailsComponent ,canActivate: [OwnerBAadminEmp , ValidGuard]},
  { path: 'operation', component: OperationComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'Book/read/:_id', component: BookOperationReadComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'Book/borrow/:id', component: BookOperationBorrowComponent ,canActivate: [BAdminEmp , ValidGuard]},
  { path: 'error400', component: Error400Component },
  { path: 'error404', component: Error404Component },
  { path: 'error403', component: Error403Component },
  { path: 'error500', component: Error500Component },
  { path: 'error503', component: Error503Component },
  
  { path: 'Admins', component: AdminListComponent ,canActivate: [OwnerBA , ValidGuard]},
  { path: 'Admins/add', component: AdminAddComponent ,canActivate: [OwnerBA , ValidGuard]},
  { path: 'Admin/details/:_id', component: AdminDetailsComponent ,canActivate: [OwnerBA , ValidGuard]},
  { path: 'Admin/edit/:_id', component: AdminEditComponent ,canActivate: [OwnerBA , ValidGuard]},
  
  { path: 'BasicAdmin', component: BasicAdminListComponent ,canActivate: [Owner , ValidGuard]},
  { path: 'BasicAdmin/add', component: BasicAdminAddComponent ,canActivate: [Owner , ValidGuard]},
  { path: 'BasicAdmin/details/:_id', component:BADetailsComponent ,canActivate: [OwnerBA , ValidGuard]},
  { path: 'BasicAdmin/edit/:_id', component:BasicAdminEditComponent ,canActivate: [OwnerBA , ValidGuard]},
  { path: '**', component: BasicAdminListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
