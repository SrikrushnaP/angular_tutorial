import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  template: `
    /* hdhd */
    <input #myInput type="text" />
    <button (click)="trvFunc(myInput.value)">Template Ref Var</button>
    {{ input1 }}

    <br><br>
    <button (click)="greatFun()">One way (DS to View)</button>
    <h3 [style.color]="hiLightColor">One-way: from data source to view target</h3>

    <br /><br />

    Two Way Binding: <input type="text" [(ngModel)]="myName"/> {{ myName }}

  `,
  styles: []
})
export class SecondComponent implements OnInit {

  public input1 = "";

  public oneWayBind = "One-way: from view target to data source";
  public hiLightColor = "green";

  constructor() { }

  ngOnInit() {
  }

  trvFunc(value){
    this.input1 = value;
  }

  greatFun(){
    console.log(this.oneWayBind);
  }

}
