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

			<h3 class="text-success">DeveloperSTips</h3>
			<h3 [class]="successClass">DeveloperSTips</h3>
			<h3 [class.text-danger]="hasError">DeveloperSTips</h3>
			<h3 [ngClass]="msgClasses">DeveloperSTips</h3>

			<h3 [style.color]="hasError ? 'red' : 'green'">DeveloperSTips</h3>
			<h3 [style.color]="hiLightColor">DeveloperSTips</h3>
			<h3 [ngStyle]="myStyle">DeveloperSTips</h3>




  `,
  styles: [`
		.text-success{
			color: green;
		}
		.text-danger{
			color: red;
		}
		.text-special{
			font-style: italic;
		}
  `]
})
export class FirstComponent implements OnInit {

	public name = 'Srikrushna';
	public myId = "testId";

	public currentUrl = window.location.href;

	public isDisable = false;

	public successClass = "text-success";
	public hasError 	= true;
	public isSpecial	= true;
	public msgClasses = {
		"text-success": !this.hasError,
		"text-danger" : this.hasError,
		"text-special": this.isSpecial
	}

	public hiLightColor = "orange";
	public myStyle = {
		color: "blue",
		fontStyle: "italic",
		fontSize: '1.5em'
	}

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
