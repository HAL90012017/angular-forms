import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

<<<<<<< Updated upstream
=======
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
>>>>>>> Stashed changes
}
