import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgModel,NgForm,FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CompanyComponent } from './company/company.component';
import { EmployeeComponent } from './employee/employee.component';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeService } from './employee.service';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
