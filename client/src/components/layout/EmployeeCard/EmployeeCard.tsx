import { EmployeeCardListProps } from "@/types/EmployeeCard"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import styles from "./EmployeeCard.module.sass"

export default function EmployeeCard({ employeeCard }: EmployeeCardListProps) {
    return (
        <div className={styles.wrapper}>
            {employeeCard.map((employee, index) => (
                <div key={index} className={styles.card}>
                    <div>
                        <Avatar className={styles.avatar}>
                            <AvatarImage src={employee.image} />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className={styles.info}>
                        <h1>{employee.services}</h1>
                        <span>{employee.employee}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}