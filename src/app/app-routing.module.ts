import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { AllDepartmentComponent } from './all-department/all-department.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: '', redirectTo: "/departments", pathMatch: "full"},
	{ path: 'departments', component: AllDepartmentComponent},
	{ path: 'employees', component: AllEmployeeComponent},	
	{ path: '**', component: PageNotFoundComponent}	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [
									AllEmployeeComponent,
									AllDepartmentComponent,
									PageNotFoundComponent
								];
