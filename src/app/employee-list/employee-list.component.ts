import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee list</h2>
    <h3>{{ errorMsg }}</h3>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];
  public errorMsg;

  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe( data  => this.employees = data,
                      error => this.errorMsg = error );
  }

}
