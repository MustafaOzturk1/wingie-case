import Link from 'next/link'
import employeeStyles from '../styles/Employee.module.scss'

const EmployeeItem = ({ employee,increment,decrement }) => {
    return (
        <div className={employeeStyles.card}>
            <div className={employeeStyles.cardbody}>
                <p>
                    <img src={employee.avatar} alt="card image" />
                </p>
                <span>
                    <span>{employee.firstName + " " + employee.lastName}</span>
                    <p >{employee.jobTitle}</p>
                </span>
                <div className={employeeStyles.scoreblock}>
                    <div className={employeeStyles.btnGroup}>
                        <button onClick={() => {decrement(employee.id,employee.vote)}} className={`${employeeStyles.btn} ${employeeStyles.btnPrimary}`}>-</button>
                        <button onClick={() => {increment(employee.id,employee.vote)}} className={`${employeeStyles.btn} ${employeeStyles.btnPrimary}`}>+</button>
                    </div>
                </div>
                <div><Link href="/employee/[id]" as={`/employee/${employee.id}`}}><button className={`${employeeStyles.btn} ${employeeStyles.btnPrimary}`}>Go to Detail</button></Link></div>
                <span className={employeeStyles.score}>Score: {employee.vote}</span>
            </div>

        </div>
    )
}

export default EmployeeItem
