import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from  '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You click on department whose ID is {{ departmentId }}</h3>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor( private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.departmentId = id;
  }

}
