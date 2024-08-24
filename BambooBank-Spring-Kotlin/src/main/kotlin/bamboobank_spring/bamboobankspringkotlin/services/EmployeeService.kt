package bamboobank_spring.bamboobankspringkotlin.services


import bamboobank_spring.bamboobankspringkotlin.pojos.Employee
import bamboobank_spring.bamboobankspringkotlin.repositories.EmployeeRepository
import bamboobank_spring.bamboobankspringkotlin.exceptions.EmployeeNotFoundException
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class EmployeeService @Autowired constructor(private val employeeRepository: EmployeeRepository) {

    fun getAllEmployees(): List<Employee> {
        return employeeRepository.findAll()
    }

    fun getEmployeeById(id: Long): Employee {
        return employeeRepository.findById(id)
            .orElseThrow { EmployeeNotFoundException("Employee not found with id: $id") }
    }

    fun createEmployee(employee: Employee): Employee {
        return employeeRepository.save(employee)
    }

    fun updateEmployee(id: Long, employee: Employee): Employee {
        if (!employeeRepository.existsById(id)) {
            throw EmployeeNotFoundException("Employee not found with id: $id")
        }

        // Create a new Employee instance with the updated id using the copy method
        val updatedEmployee = employee.copy(id = id)
        return employeeRepository.save(updatedEmployee)
    }


    fun deleteEmployee(id: Long) {
        if (!employeeRepository.existsById(id)) {
            throw EmployeeNotFoundException("Employee not found with id: $id")
        }
        employeeRepository.deleteById(id)
    }
}
