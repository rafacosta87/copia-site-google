import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'


function Botao({ children, onClick }) {
    const { temaEscuro } = useContext(ContextoTema)
    return <button onClick={onClick} className={`bg-[#3c4043] text-[#e8eaed]  px-[10px] py-[5px] h-[34px] w-[140px]  text-center cursor-pointer rounded-[8px] text-[14px] border-[1px] font-[Arial,sans-serif] ${temaEscuro? "border-[#3c4043]" : "border-[#f8f9fa]"} ${temaEscuro ? "hover:border-[#5f6368]" : "hover:border-[#dadce0]"} ${temaEscuro? "" : "hover:shadow-[0_1px_1px_rgba(0,0,0,.1)]"}`}
        style={{ backgroundColor: temaEscuro ? "#3c4043" : "#f8f9fa", color: temaEscuro ? "#e8eaed" : "#3c4043" }}>
        {children}
    </button>
}
export default Botao