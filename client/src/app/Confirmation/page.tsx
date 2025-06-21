import CalendarModal from "@/components/layout/Modal/Modal";

export default function Confirmation () {
    return (
        <div>
            <CalendarModal open={false} onClose={function (): void {
                throw new Error("Function not implemented.");
            } } selectedDate={""} horariosOcupados={[]} onConfirm={function (data: { name: string; phone: string; service: string; time: string; }): void {
                throw new Error("Function not implemented.");
            } } />
        </div>
    )
}
