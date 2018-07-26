import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from  '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>You click on department whose ID is {{ departmentId }}</h3>
    <div>
      <button (click)="goPrevious()">Previous</button>
      <button (click)="goNext()">Next</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;

  constructor( private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // Snapshoot approch
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    // paramap observable
    this.route.paramMap.subscribe((params: ParamMap)=>{
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }

  goPrevious(){
    let prevId = this.departmentId - 1;
    this.router.navigate(['/departments', prevId]);
  }
  goNext(){
    let nextId = this.departmentId + 1;
    this.router.navigate(['/departments', nextId]);
  }
}
