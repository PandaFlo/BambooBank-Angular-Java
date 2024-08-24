package bamboobank_spring.bamboobankspringkotlin.pojos

import org.springframework.context.annotation.Scope
import org.springframework.stereotype.Component
import java.math.BigDecimal
import java.time.LocalDate
import jakarta.persistence.*

@Entity
@Component
@Scope("prototype")
data class Employee(
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "EMP_ID_GEN")
    @SequenceGenerator(name = "EMP_ID_GEN", sequenceName = "EMP_ID_SEQ")
    val id: Long = 0,

    @Column(name = "firstname")
    var firstName: String,

    @Column(name = "lastname")
    var lastName: String,

    var email: String,

    var address: String,

    var salary: BigDecimal,

    @Column(name = "hiredate")
    var hireDate: LocalDate
)