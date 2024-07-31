import { Component } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  constructor(private employeeService: EmployeeService, private router:Router){}




  navigateToEmployee(id:number) {
    this.router.navigate(['/employees', id]);
  }

  
}
