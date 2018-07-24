import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'structural-directive',
  template: `
    <h3 *ngIf="false">DeveloperSTips</h3>

    <h3 *ngIf="displayName; else falseBlock">DeveloperSTips</h3>
    <ng-template #falseBlock>
      <h3>DeveloperSTips Hidden</h3>
    </ng-template>
    
    <div *ngIf="displayName; then ifBlock; else elseBlock"></div>
    <ng-template #ifBlock>
      <h3>If Block</h3>
    </ng-template>
    <ng-template #elseBlock>
      <h3>Else Block</h3>
    </ng-template>

    <div [ngSwitch]="color">
      <div *ngSwitchCase="'green'">Hey..! The color value is <strong>Green</strong>.</div>
      <div *ngSwitchCase="'red'">Hey..! The color value is <strong>Red</strong>.</div>
      <div *ngSwitchCase="'yellow'">Hey..! The color value is <strong>Yellow</strong>.</div>
      <div *ngSwitchDefault>Oops..! The Color Value <strong>Not-match</strong>.</div>
    </div>

    <div *ngFor=" let color of colors">
      <h3>{{ color }}</h3>
    </div>

    <div *ngFor=" let color of colors; index as i">
      <h3>{{i}}. {{ color }}</h3>
    </div>
    
    <div *ngFor=" let color of colors; even as e">
      <h3>{{e}} - {{ color }}</h3>
    </div>

    //insted of even you may use odd, last, first etc ara available. for more check angular documentattion

  `,
  styles: []
})
export class StructuralDirectiveComponent implements OnInit {

  public displayName = false;

  public color = "green";

  public colors = ['green', 'red', 'yellow', 'blue', 'pink'];

  constructor() { }

  ngOnInit() {
  }

}
