import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-all-department',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span>{{ department.name }}
      </li>
    </ul>
  `,
  styles: []
})
export class AllDepartmentComponent implements OnInit {

  public selectedId;
  public departments = [
    {"id": 1, "name": "IT"},
    {"id": 2, "name": "HR"},
    {"id": 3, "name": "Salse"},
    {"id": 4, "name": "Admin"},
    {"id": 5, "name": "Operation"}
  ]

  constructor( private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt( params.get('id') );
      this.selectedId = id;
    });
  }

  onSelect(department){
    // this.router.navigate(['/departments', department.id]);

    // relative navigation
    this.router.navigate([department.id], {relativeTo: this.route});
  }

  isSelected(department){
    return department.id === this.selectedId;
  }

}
