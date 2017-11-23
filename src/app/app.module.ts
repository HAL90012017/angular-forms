import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MaterialModule,  MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';



import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule,  MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }