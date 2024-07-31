package BambooBank_Angular_Spring.BambooBank_Spring.repositories;


import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import BambooBank_Angular_Spring.BambooBank_Spring.pojos.Employee;


@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    List<Employee> findByFirstName(String firstName);

    List<Employee> findByLastName(String lastName);

    List<Employee> findByEmail(String email);

    List<Employee> findByAddress(String address);

    List<Employee> findBySalary(BigDecimal salary);

    List<Employee> findByHireDate(LocalDate hireDate);
}