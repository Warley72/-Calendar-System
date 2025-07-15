"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog"

import styles from "./modal.module.sass"

type Props = {
    open: boolean
    onClose: () => void
    selectedDate: string
    horariosOcupados: string[]
    onConfirm: (data: {
        name: string
        phone: string
        service: string
        time: string
    }) => void
}

const horariosDisponiveis = ["09:00", "10:00", "11:00", "13:00", "14:00"]

export default function CalendarModal({ open, onClose, selectedDate, horariosOcupados, onConfirm }: Props) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [service, setService] = useState("")
    const [time, setTime] = useState("")

    const handleSubmit = () => {
        if (name && phone && service && time) {
            onConfirm({ name, phone, service, time })
            onClose()
        }
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className={styles.wrapperContent}>
                <DialogHeader>
                    <DialogTitle>Agendar para {selectedDate}</DialogTitle>
                </DialogHeader>
                <form action="">
                    <div className="">
                        <div className="">
                            <Input placeholder="seu nome" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="">
                            <Input placeholder="Seu numero de telefone" value={phone} onChange={(e) => setPhone(e.target.value)} ></Input>
                        </div>
                    </div>
                    <Select onValueChange={setService}>
                        <SelectTrigger className="select-trigger">
                            <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Corte">Cabelo</SelectItem>
                            <SelectItem value="Barba">Unha</SelectItem>
                            <SelectItem value="Corte + Barba">limpeza de pele</SelectItem>
                        </SelectContent>
                    </Select>
                    <div>
                        <Label>Horários disponíveis</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {horariosDisponiveis.map((hora) => {
                                const ocupado = horariosOcupados.includes(hora)
                                return (
                                    <Button
                                        type="button"
                                        key={hora}
                                        variant={ocupado ? "destructive" : time === hora ? "default" : "outline"}
                                        disabled={ocupado}
                                        onClick={() => setTime(hora)}
                                        className={`w-[70px] h-[40px] rounded-lg text-sm font-medium transition ${time === hora ? 'border-2 border-[#87605F] bg-white' : ''}`}
                                    >
                                        {hora}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>

                </form>
                <DialogFooter>
                    <Button onClick={handleSubmit}>Confirmar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
