import EmployeeCard from "@/components/layout/EmployeeCard/EmployeeCard";
import { employeeCard } from "@/mocks/EmployeeCard"

export default function Home() {
  return (
    <div>
        <EmployeeCard employeeCard={ employeeCard } />
    </div>
  )
}
