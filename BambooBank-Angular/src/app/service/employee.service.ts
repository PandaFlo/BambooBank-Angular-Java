import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = 'http://localhost:8082/api/BambooStalks'; 
  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  createEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, employee);
  }

  getEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/' + id);
  }

  deleteEmployee(id: number): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/' + id);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/' + employee.id, employee);
  }
}

