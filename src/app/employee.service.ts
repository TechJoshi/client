import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  url = 'http://172.18.4.72:9898/employee'
  constructor(private http:HttpClient) { 
    
  }
  getEmployee(){
    return this.http.get(this.url);
  }
}
