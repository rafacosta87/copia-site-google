import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'

function Botao({ children, onClick, type = "button" }) {
    const { temaEscuro } = useContext(ContextoTema)

    return (
        <button 
            type={type}
            onClick={onClick} 
            className={`
                px-2.5 py-[5px] h-[36px] min-w-[140px] rounded-md text-[14px] border transition-all font-sans cursor-pointer
                /* Lógica de Cores e Bordas */
                ${temaEscuro 
                    ? "bg-[#3c4043] border-[#3c4043] text-[#e8eaed] hover:border-[#5f6368] hover:text-[#f8f9fa]" 
                    : "bg-[#f8f9fa] border-[#f8f9fa] text-[#3c4043] hover:border-[#dadce0] hover:shadow-[0_1px_1px_rgba(0,0,0,0.1)]"
                }
            `}
        >
            {children}
        </button>
    )
}

export default Botao