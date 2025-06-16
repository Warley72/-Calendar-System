import { EmployeeCardListProps } from "@/types/EmployeeCard"

import styles from "./EmployeeCard.module.sass"

export default function EmployeeCard ({ employeeCard }: EmployeeCardListProps ) {
    return (
        <div className={styles.wrapper}>
            { employeeCard.map((employee, index) => (
                <div key={index} className={styles.card}>
                    <h1>{employee.services}</h1>
                    <span>{employee.employee}</span>
                </div>
            ))}
        </div>
    )
}