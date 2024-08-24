package bamboobank_spring.bamboobankspringkotlin.repositories

import bamboobank_spring.bamboobankspringkotlin.pojos.Employee
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import java.math.BigDecimal
import java.time.LocalDate

@Repository
interface EmployeeRepository : JpaRepository<Employee, Long> {

    fun findByFirstName(firstName: String): List<Employee>

    fun findByLastName(lastName: String): List<Employee>

    fun findByEmail(email: String): List<Employee>

    fun findByAddress(address: String): List<Employee>

    fun findBySalary(salary: BigDecimal): List<Employee>

    fun findByHireDate(hireDate: LocalDate): List<Employee>
}