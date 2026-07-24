import IconeLupa from '../icones/IconeLupa'
import IconeTeclado from '../icones/IconeTeclado'
import IconeMicrofone from '../icones/IconeMicrofone'
import IconeFoto from '../icones/IconeFoto'
import { useState, useRef, useEffect } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import IconeX from '../icones/IconeX'
import Botao from './Botao'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'
import HistoricoPesquisa from './HistoricoPesquisa' // Importar o novo componente

function BarraPesquisa() {
    const { temaEscuro } = useContext(ContextoTema);
    const [historicoPesquisa, setHistoricoPesquisa] = useState(() =>
        JSON.parse(localStorage.getItem("historicoPesquisa") ?? "[]")
    );
    const [pesquisa, setPesquisa] = useState("");
    const [focused, setFocused] = useState(false);
    const searchbarRef = useRef();

    useEffect(() => {
        localStorage.setItem("historicoPesquisa", JSON.stringify(historicoPesquisa));
    }, [historicoPesquisa]);

    useClickOutside(searchbarRef, () => setFocused(false));

    function handleSubmit(event) {
        event.preventDefault();
        const termo = pesquisa.trim();
        if (!termo) return;
        // Remove duplicatas e coloca no topo
        setHistoricoPesquisa(prev => [termo, ...prev.filter(h => h !== termo)].slice(0, 30));
        setPesquisa("");
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(termo)}`;
    }

    return (
        <form onSubmit={handleSubmit} className='w-full flex flex-col items-center mt-[25px]'>
            <div
                ref={searchbarRef}
            className={`
                    relative flex items-center w-full max-w-[688px] h-[50px] px-5 
                    ${focused ? 'rounded-t-[24px]' : 'rounded-[24px]'}

                    ${temaEscuro
                        ? // Tema Escuro
                            focused
                                ? 'bg-[#303134] border-none shadow-none'
                                : 'bg-[#4d5156] border-none hover:bg-[#5f6368] hover:shadow-[0_1px_6px_rgba(0,0,0,0.5)]'
                        : // Tema Claro
                            focused
                                ? 'bg-white border-transparent shadow-[0_1px_6px_rgba(32,33,36,0.28)]'
                                : 'bg-white border border-[#dadce0] shadow-[0px_3px_10px_0px_rgba(31,31,31,0.08)] hover:shadow-[0_1px_6px_rgba(32,33,36,0.28)] hover:border-transparent'
                    }
                `}
            >
                <button type="submit" className="cursor-pointer ">
                    <IconeLupa />
                </button>

                <input
                    type="text"
                    onFocus={() => setFocused(true)}
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                    aria-label="Pesquisar"
                    className={`
                        w-full h-full px-3 text-[16px] focus:outline-none bg-transparent
                        ${temaEscuro ? 'text-[#e8eaed]' : 'text-[#000000de]'}
                    `}
                />

                <div className={`flex items-center gap-4 ${temaEscuro ? 'text-[#aaadb2]' : 'text-[#1f1f1f]'}`}>
                    {pesquisa && (
                        <button
                            type="button"
                            onClick={() => setPesquisa("")}
                            aria-label="Limpar pesquisa"
                            className={`border-r-[1.5px] cursor-pointer pr-3 py-1 ${temaEscuro ? 'border-[#5f6368]' : 'border-[#aaadb2]'}`}
                        >
                            <IconeX />
                        </button>
                    )}
                    <IconeTeclado />
                    <IconeMicrofone />
                    <IconeFoto />
                </div>

                {/* Dropdown de Histórico */}
                {focused && (
                    <HistoricoPesquisa
                        historicoPesquisa={historicoPesquisa}
                        setHistoricoPesquisa={setHistoricoPesquisa}
                        temaEscuro={temaEscuro}
                    />
                )}
            </div>

            <div className='flex gap-3 mt-[30px]'>
                <Botao type="submit">Pesquisa Google</Botao>
                <Botao type="button">Estou com sorte</Botao>
            </div>
        </form>
    );
}

export default BarraPesquisa