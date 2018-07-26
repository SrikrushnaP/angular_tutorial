import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-department',
  template: `
    <h3>
      Department list
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor=" let department of departments ">
        <span class="badge">{{ department.id }}</span>{{ department.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class AllDepartmentComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "IT"},
    {"id": 2, "name": "HR"},
    {"id": 3, "name": "Salse"},
    {"id": 4, "name": "Admin"},
    {"id": 5, "name": "Operation"}
  ];

  constructor( private router: Router) { }

  ngOnInit() {
  }

  onSelect(department){
    this.router.navigate(['/departments', department.id])
  }

}
