import { Component, OnInit } from '@angular/core';

import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `
    <h2>Employee list</h2>
    <ul *ngFor="let employee of employees">
      <li>{{ employee.name }}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor( private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
          .subscribe( data => this.employees = data);
  }

}
