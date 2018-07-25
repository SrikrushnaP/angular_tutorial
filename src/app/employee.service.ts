import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getEmployees(){
  	return [
			    {"id": 1, "name":"Sri", "age": 25},
			    {"id": 2, "name":"Srikrushna", "age": 26},
			    {"id": 3, "name":"Krushna", "age": 27},
			    {"id": 4, "name":"Krishna", "age": 28},
			    {"id": 5, "name":"Pal", "age": 29}
			];
  }
}
