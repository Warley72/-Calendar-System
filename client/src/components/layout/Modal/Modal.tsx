"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, } from "@/components/ui/dialog"

import { useState } from "react"

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

const horariosDisponiveis = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"]

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
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Agendar para {selectedDate}</DialogTitle>
                </DialogHeader>

                <div className="space-y-4">
                    <div>
                        <Label>Nome</Label>
                        <Input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>

                    <div>
                        <Label>Telefone</Label>
                        <Input value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>

                    <div>
                        <Label>Serviço</Label>
                        <Select onValueChange={setService}>
                            <SelectTrigger>
                                <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Corte">Corte</SelectItem>
                                <SelectItem value="Barba">Barba</SelectItem>
                                <SelectItem value="Corte + Barba">Corte + Barba</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>Horários disponíveis</Label>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {horariosDisponiveis.map((hora) => {
                                const ocupado = horariosOcupados.includes(hora)
                                return (
                                    <Button
                                        key={hora}
                                        variant={ocupado ? "destructive" : time === hora ? "default" : "outline"}
                                        disabled={ocupado}
                                        onClick={() => setTime(hora)}
                                    >
                                        {hora}
                                    </Button>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <DialogFooter className="pt-4">
                    <Button onClick={handleSubmit}>Confirmar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
