import { X } from "phosphor-react";
import { ComponentProps } from "react";
import { DateDay, Scheduling, ToastContainer } from "./style";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {

}

export function Toast() {
    return(
        <ToastContainer>
            <Scheduling>
                Agendamento realizado
                <X size={20} weight="bold" className="close"/>
            </Scheduling>
            <DateDay>
                Quarta-feira, 23 de Outubro às 16h
            </DateDay>
        </ToastContainer>
    )
}