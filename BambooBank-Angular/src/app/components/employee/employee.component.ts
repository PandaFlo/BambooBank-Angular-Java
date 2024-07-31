import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  id: number = 0;
  employee: Employee = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    salary: 0,
    hireDate: ''
  };

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute,private router:Router ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id']; 
      this.loadEmployee();
    });
  }

  loadEmployee() {
    this.employeeService.getEmployee(this.id).subscribe(
      (res: Employee) => {
        this.employee = res;
      },
      error => {
        console.log('Error loading employee: ', error);
      }
    );
  }

  deleteEmployee() {
    this.employeeService.deleteEmployee(this.id).subscribe(
      res => {
        alert('Deleted employee with ID: ' + this.id);
      }

    )
    this.router.navigate(['employees']);
  }


  createEmployee(firstName: string, lastName: string, email: string, address: string, salary: number, hireDate: string) {
    this.employee.firstName = firstName;
    this.employee.lastName = lastName;
    this.employee.email = email;
    this.employee.address = address;
    this.employee.salary = salary;
    this.employee.hireDate = hireDate;

    this.employeeService.createEmployee(this.employee).subscribe(
      res => {
        console.log('Updated employee with ID: ' + this.id);
      },

    )
  }

  updateEmployee(firstName: string, lastName: string, email: string, address: string, salary: number, hireDate: string) {
    this.employee.firstName = firstName;
    this.employee.lastName = lastName;
    this.employee.email = email;
    this.employee.address = address;
    this.employee.salary = salary;
    this.employee.hireDate = hireDate;

    this.employeeService.updateEmployee(this.employee).subscribe(
      res => {
        console.log('Updated employee with ID: ' + this.employee.employeeId);
      }

    )
    this.router.navigate(['employees']);
  }
  
}
