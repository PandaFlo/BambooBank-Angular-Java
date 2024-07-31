import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeeService } from '../../service/employee.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  constructor(private employeeService: EmployeeService, private router: Router){}

  employee: Employee = {
    employeeId: 0,
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    salary: 0,
    hireDate: ''
  };



  createEmployee(firstName: string, lastName: string, email: string, address: string, salary: number, hireDate: string) {
    this.employee.firstName = firstName;
    this.employee.lastName = lastName;
    this.employee.email = email;
    this.employee.address = address;
    this.employee.salary = salary;
    this.employee.hireDate = hireDate;

    this.employeeService.createEmployee(this.employee).subscribe(
      res => {
        console.log('Updated employee with ID: ' + this.employee.employeeId);
      }

    )

    this.router.navigate(['employees']);
  }





}
