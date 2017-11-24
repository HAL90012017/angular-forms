import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public model = {};
  public submitted: boolean = false;
  constructor() { }

  ngOnInit() {
  }

 public getSubmittedEmployeeInfo () {
   return JSON.stringify(this.model);
 }

 public submit(employeeDetailsForm) {
   if (employeeDetailsForm.valid) {
      this.submitted = true;
   } else {
     for (const i in employeeDetailsForm.controls) {
           if (employeeDetailsForm.controls[i]) {
               employeeDetailsForm.controls[i].markAsTouched();
           }
       }
   }
 }
}
