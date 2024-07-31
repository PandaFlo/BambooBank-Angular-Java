package BambooBank_Angular_Spring.BambooBank_Spring.controller;


import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import BambooBank_Angular_Spring.BambooBank_Spring.exceptions.EmployeeNotFoundException;
import BambooBank_Angular_Spring.BambooBank_Spring.pojos.Employee;
import BambooBank_Angular_Spring.BambooBank_Spring.services.EmployeeService;





@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/v1/test")
public class EmployeeRestController {
    
    

 

	
		private EmployeeService employeeService;
	
		@Autowired
		public EmployeeRestController(EmployeeService employeeService) {
			this.employeeService = employeeService;
		}
	


		


		@GetMapping
		public List<Employee> getEmployees() {
			return employeeService.getAllEmployees();
		}
	
		@GetMapping("/{id}")
		public Employee findEmployee(@PathVariable long id) throws EmployeeNotFoundException {
			return employeeService.getEmployeeById(id);
		}
	
		@PostMapping
		public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
			Employee managedEmployee = employeeService.createEmployee(employee);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(managedEmployee.getEmployeeId()).toUri();
			return ResponseEntity.created(location).build();
		}
	
		@DeleteMapping("/{id}")
		public void deleteEmployee(@PathVariable long id) throws EmployeeNotFoundException {
			employeeService.deleteEmployee(id);
		}
	
		@PutMapping("/{id}")
		public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee employee) throws EmployeeNotFoundException {
			Employee updatedEmployee = employeeService.updateEmployee(id, employee);
			return ResponseEntity.ok(updatedEmployee);
		}
		
		
	}
	

