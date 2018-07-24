import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
			<h3>Inline Temaplate Example</h3>
  `,
  styles: [`
		h3{
			color: green;
		}
  `]
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
