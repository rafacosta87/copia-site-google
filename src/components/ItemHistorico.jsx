import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'
import IconeRelogio from '../icones/IconeRelogio'

function ItemHistorico({ item, event }) {
    const { temaEscuro } = useContext(ContextoTema)

    return (
        <div className={`
            group flex w-full flex-row gap-5 items-center px-5 py-1 
            ${temaEscuro ? "hover:bg-[#3c4043]" : "hover:bg-[#f7f8f9]"}
        `}>
            {/* Ícone de Relógio */}
            <div className={temaEscuro ? "text-[#9aa0a6]" : "text-[#70757a]"}> 
                <IconeRelogio />
            </div>

            <div className="flex flex-row justify-between w-full items-center">
                {/* Texto da Pesquisa */}
                <a 
                    className={`w-full cursor-default text-[16px] ${
                        temaEscuro ? "text-[#c58af9]" : "text-[#52188c]"
                    }`} 
                    href={`https://www.google.com/search?q=${encodeURIComponent(item)}`}
                >
                    {item}
                </a>

                {/* Botão Excluir (Só aparece no Hover do pai 'group') */}
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        event();
                    }}
                    className={`
                        hidden group-hover:flex text-[12px] hover:underline transition-colors
                        ${temaEscuro 
                            ? "text-[#aaadb2] hover:text-[#8ab4f8]" 
                            : "text-[#70757a] hover:text-[#1558d6]"
                        }
                    `}
                >
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ItemHistorico