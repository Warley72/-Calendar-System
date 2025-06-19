"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import ptBrLocale from "@fullcalendar/core/locales/pt-br"

import styles from "./FullCalendarView.module.sass"
import "@/styles/fullcalendar.custom.sass"

export default function FullCalendarView() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.CalendarContainer}>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale={ptBrLocale}
                    headerToolbar={{
                        start: "",
                        center: "title",
                        end: "",
                    }}
                    dayHeaderContent={(args) => args.text.charAt(0)}
                />
            </div>
        </div>
    )
}
