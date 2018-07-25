import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h3>{{ "Hey..! "+ parentData}}</h3>
    <button (click)="sendEvent()">Send Event</button>
  `,
  styles: []
})
export class ChildComponent implements OnInit {

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
