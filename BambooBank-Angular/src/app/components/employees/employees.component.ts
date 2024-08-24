import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit{
  employees: Employee[] = [];
  
  constructor(private employeeService: EmployeeService,private router:Router, private location:Location) {}





  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employees = res;
      }
    )
  }




  deleteEmployee( id:number) {
    this.employeeService.deleteEmployee(id).subscribe(
      res => {
        alert('Deleted employee with ID: ' + id);
       location.reload();
      }

    )
   
  }






}
