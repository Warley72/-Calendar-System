import EmployeeCard from "@/components/layout/EmployeeCard/EmployeeCard";
import { employeeCard } from "@/mocks/EmployeeCard"
import Link from "next/link";

export default function Home() {
    return (
        <div>
            <Link href={"Calendar"} >
                <EmployeeCard employeeCard={employeeCard} />
            </Link>
        </div>
    )
}
