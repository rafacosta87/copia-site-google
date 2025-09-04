import { useState } from "react"
import IconeRelogio from "../icones/IconeRelogio"
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'

function ItemHistorico({ item, event }) {                                                                                                   //função recebera item que sera usado no span(l 20)
    const [hovered, setHovered] = useState(false)
    const { temaEscuro } = useContext(ContextoTema)

    return (
        <div                                                                                                                               //abaixo iremos alterar o estado hovered(l 9) a depender do passar do mouse
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            className={`flex w-full flex-row gap-5 items-center  px-5 py-1 ${temaEscuro? "hover:bg-[#3c4043]" : "hover:bg-[#f7f8f9]"}`}
            style={{color: temaEscuro? "#c58af9" : "#52188c" }}
        >
            <div className="text-[#8d9196] "> 
            <IconeRelogio />
            </div>
            <div className='flex flex-row justify-between w-full'>
                <a className="w-full cursor-default " href={`https://www.google.com/search?q=${item}`}>
                    {item}
                </a>
                {hovered &&                                                                                                                 //quando houvered for true mostrara a div e escondera quando false
                    <div
                        onClick={event}
                        className={`hover:underline text-[12px] flex justify-center items-center cursor-pointer ${temaEscuro? "text-[#aaadb2]" : "text-[#70757a]"} ${temaEscuro? "hover:text-[#8ab4f8]" : "hover:text-[#1558d6]"}`}>
                        Excluir
                    </div>
                }
            </div>
        </div>
    )
}
export default ItemHistorico