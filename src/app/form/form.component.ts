import { Component, OnInit } from '@angular/core';
import { IEmployeeDetails } from'../employee-details.interface.ts'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
public model: IEmployeeDetails = {};
public submitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }

 public getSubmittedEmployeeInfo () {
   return JSON.stringify(this.model);
 }

 public submit() {
   this.submitted = true;
 }
}
