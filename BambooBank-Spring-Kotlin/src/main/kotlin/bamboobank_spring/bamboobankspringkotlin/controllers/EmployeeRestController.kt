package bamboobank_spring.bamboobankspringkotlin.controllers

import bamboobank_spring.bamboobankspringkotlin.services.EmployeeService
import bamboobank_spring.bamboobankspringkotlin.pojos.Employee
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import org.springframework.web.servlet.support.ServletUriComponentsBuilder
import java.net.URI

@RestController
@CrossOrigin(origins = ["http://localhost:4200"])
@RequestMapping("api/BambooStalks")
class EmployeeRestController @Autowired constructor(private val employeeService: EmployeeService) {

    @GetMapping
    fun getEmployees(): List<Employee> {
        return employeeService.getAllEmployees()
    }

    @GetMapping("/{id}")
    fun findEmployee(@PathVariable id: Long): Employee {
        return employeeService.getEmployeeById(id)
    }

    @PostMapping
    fun createEmployee(@RequestBody employee: Employee): ResponseEntity<Employee> {
        val managedEmployee = employeeService.createEmployee(employee)
        val location: URI = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
            .buildAndExpand(managedEmployee.id).toUri()
        return ResponseEntity.created(location).build()
    }

    @DeleteMapping("/{id}")
    fun deleteEmployee(@PathVariable id: Long) {
        employeeService.deleteEmployee(id)
    }

    @PutMapping("/{id}")
    fun updateEmployee(@PathVariable id: Long, @RequestBody employee: Employee): ResponseEntity<Employee> {
        val updatedEmployee = employeeService.updateEmployee(id, employee)
        return ResponseEntity.ok(updatedEmployee)
    }
}