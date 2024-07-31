import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent implements OnInit{
  employees: Employee[] = [];
  constructor(private employeeService: EmployeeService, private router:Router) {}
 
  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(
      res => {
        this.employees = res;
      }
    )
  }

  navigateToEmployee(id:number) {
    this.router.navigate(['/employees', id]);
  }


}
