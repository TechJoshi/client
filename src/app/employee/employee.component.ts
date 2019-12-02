import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee = []
  constructor(private service: EmployeeService) { }

  ngOnInit() {
    this.service.getEmployee().subscribe(response=>{
      if(response['status']==='success'){
        this.employee = response['data'] as any[]
      }
      else{
        console.log('error',response['error']);
        
      }
    })
  }

}
