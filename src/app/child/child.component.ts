import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>{{ "Hey..! "+ parentData}}</h3>
    <button (click)="sendEvent()">Send Event</button>
    
    <h2>Smoe angular built in pipes</h2>
    <hr />

    <h3>Original String: {{ myString }}</h3>
    <h3>titleCase: {{ myString | titlecase }}</h3>
    <h3>uppercase: {{ myString | uppercase }}</h3>
    <h3>Slice: {{ myString | slice :15:31}}</h3>
    <h3>JSON: {{ person | json }}</h3>
    <h3>Date: {{ today | date }}</h3>
    <h3>Multiple pai: {{ today | date | uppercase }}</h3>
    <h3>Multiple pai with parameter: {{ today | date:"fullDate" | uppercase }}</h3>
    <p>For more read <a href="https://angular.io/guide/pipes" target="_blank">angular pai documentation</a></p>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

  public myString = "My blog name is Developers Blog";

  public person = {
    "fname": "Sri",
    "lname": "pal"
  }

  public today = new Date();

  @Input() public parentData;
  // @Input('parentData') public myName; // Inseted of write the parent name you may provide a alias name
                                        //  Use the same name name on your template
  @Output() public childEvevnt = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  sendEvent(){
    this.childEvevnt.emit("Hey Sri");
  }

}
