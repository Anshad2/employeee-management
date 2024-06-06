import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmployeecreateComponent } from './employeecreate/employeecreate.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const routes: Routes = [
  {path:"",component:EmployeelistComponent},
  {path:"employee/add",component: EmployeecreateComponent},
  {path:"employee/:id",component:EmployeeDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
