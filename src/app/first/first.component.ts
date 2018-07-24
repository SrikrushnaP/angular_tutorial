import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
			<p>Welcome to <strong>{{ name }}</strong></p>
			<h3>{{ 2+5 }}</h3>
			<h3>{{ "Welcome " + name }}</h3>
			<h3>{{ name.length }}</h3>
			<h3>{{ greetUser() }}</h3>
			<h3>{{ currentUrl }}</h3>
			<h3>{{ 1+1+newVal() }}</h3>

			<input type="text" [id]="myId"/>
			<input type="text" id="{{myId}}"/><br><br>

			<input type="text" disabled="{{false}}"/>
			<input type="text" [disabled]="false"/><br><br>

			<input type="text" [disabled]="isDisable"/>

  `,
  styles: [`
		
  `]
})
export class FirstComponent implements OnInit {

	public name = 'Srikrushna';
	public myId = "testId";

	public currentUrl = window.location.href;

	public isDisable = false;

  constructor() { }

  ngOnInit() {
  }

  greetUser(){
  	return "Welcome to "+this.name;
  }

  newVal(){
  	return 3;
  }
}
