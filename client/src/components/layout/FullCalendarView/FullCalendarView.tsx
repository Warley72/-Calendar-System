"use client"

import { useState } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import ptBrLocale from "@fullcalendar/core/locales/pt-br"
import interactionPlugin from "@fullcalendar/interaction"

import styles from "./FullCalendarView.module.sass"
import "@/styles/fullcalendar.custom.sass"
import CalendarModal from "../Modal/Modal"

export default function FullCalendarView() {
    const [isOpen, setIsOpen] = useState(false)
    const [selectedDate, setSelectedDate] = useState("")
    const [horariosOcupados, setHorariosOcupados] = useState<string[]>([])

    const handleDateClick = (info: { dateStr: string }) => {
        console.log("Clicou em:", info.dateStr)
        setSelectedDate(info.dateStr)

        // Exemplo: horários ocupados fictícios, você pode buscar de uma API ou banco depois
        const ocupadosExemplo = ["10:00", "14:00"]
        setHorariosOcupados(ocupadosExemplo)

        setIsOpen(true)
    }

    const closeModal = () => setIsOpen(false)

    const handleConfirm = (data: {
        name: string
        phone: string
        service: string
        time: string
    }) => {
        console.log("Dados confirmados:", data)

        // Aqui você pode salvar no backend, por exemplo.
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.CalendarContainer}>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    locale={ptBrLocale}
                    headerToolbar={{
                        start: "",
                        center: "title",
                        end: "",
                    }}
                    dateClick={handleDateClick}
                />
            </div>

            <CalendarModal
                open={isOpen}
                onClose={closeModal}
                selectedDate={selectedDate}
                horariosOcupados={horariosOcupados}
                onConfirm={handleConfirm}
            />
        </div>
    )
}
