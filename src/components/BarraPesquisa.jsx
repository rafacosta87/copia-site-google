
import IconeLupa from '../icones/IconeLupa'
import IconeTeclado from '../icones/IconeTeclado'
import IconeMicrofone from '../icones/IconeMicrofone'
import IconeFoto from '../icones/IconeFoto'
import { useState, useRef, useEffect } from 'react'
import useClickOutside from '../hooks/useClickOutside'
import IconeX from '../icones/IconeX'
import ItemHistorico from './ItemHistorico'
import Botao from './Botao'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'

function BarraPesquisa() {
    const { temaEscuro } = useContext(ContextoTema)
    const [historicoPesquisa, setHistoricoPesquisa] = useState(JSON.parse(localStorage.getItem("historicoPesquisa") ?? "[]"))
    const [pesquisa, setPesquisa] = useState("")
    const [focused, setFocused] = useState(false)
    const searchbarRef = useRef()
    const [hovered, setHovered] = useState(false)

    useEffect(() => {
        if (historicoPesquisa) {
            localStorage.setItem("historicoPesquisa", JSON.stringify(historicoPesquisa))
        }
    }, [historicoPesquisa])

    useClickOutside(searchbarRef, () => setFocused(false))

    function handleSearch(event) {
        if (event.code == "Enter" || event.button == 0) {
            event.preventDefault()
            if (pesquisa.trim() == "") {
                return
            }
            const novoHistoricoPesquisa = [...historicoPesquisa]
            if (historicoPesquisa.filter(historico => historico == pesquisa).length > 0) {
                const index = novoHistoricoPesquisa.findIndex(historico => historico == pesquisa)
                novoHistoricoPesquisa.splice(index, 1)
            }
            novoHistoricoPesquisa.unshift(pesquisa)
            setHistoricoPesquisa(novoHistoricoPesquisa)
            setPesquisa("")
            window.location.href = `https://www.google.com/search?q=${pesquisa}`

        }
    }

    function limparPesquisa() {
        setPesquisa("")
    }

    function excluirPesquisa(id) {
        const array = [...historicoPesquisa]
        array.splice(id, 1)
        setHistoricoPesquisa(array)
    }

    return (

        <>
            <div
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                ref={searchbarRef}
                style={{
                    borderRadius: focused ? "26px 26px 0px 0px" : "26px",
                    backgroundColor: focused ? (temaEscuro ? "#303134" : "#fff") : (temaEscuro ? (hovered ? "#5f6368" : "#4d5156") : "#fff"),
                    boxShadow: focused ? (temaEscuro ? "" : "0 2px 8px 1px rgba(64,60,67,.24)") : (temaEscuro ? "" : (hovered ? "0 2px 8px 1px rgba(64,60,67,.24)" : "0px 3px 10px 0px rgba(31, 31, 31, 0.08)")),
                    border: focused ? (temaEscuro ? "" : "") : (temaEscuro ? "" : "1px  solid #dadce0")
                }}
                className={` relative flex flex-row justify-between items-center w-full max-w-[680px] h-[50px] rounded-[26px] px-5 py-[26px] `}>
                <div className='cursor-pointer' onClick={e => handleSearch(e)}>
                    <IconeLupa />
                </div>
                <div className=' w-full '>
                    <textarea
                        onFocus={() => setFocused(true)}
                        rows="1"
                        className=' w-full max-w-[400px] focus:outline-none p-2 text-[16px] resize-none'
                        style={{ color: temaEscuro ? "#e8eaed" : "#000000de" }}
                        onKeyDown={e => handleSearch(e)}
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center'
                    style={{ color: temaEscuro ? "#aaadb2" : "#1f1f1f" }}>
                    {pesquisa != "" &&
                        <div className='cursor-pointer border-r-[1px] pr-[12px] py-1.5 '
                            style={{ borderColor: temaEscuro ? "#5f6368" : "#aaadb2" }}
                            onClick={limparPesquisa}
                        >
                            <IconeX />
                        </div>
                    }
                    <IconeTeclado />
                    <IconeMicrofone />
                    <IconeFoto />
                </div>

                {focused ?
                    <div className='absolute  w-full max-w-[680px] top-[50px] left-0 flex flex-col  rounded-b-[26px] py-2  overflow-hidden z-30'
                        style={{
                            backgroundColor: temaEscuro ? "#303134" : "#fff",
                            boxShadow: (temaEscuro ? "" : "0 4px 8px -2px rgba(64,60,67,.24)"),
                            width: "calc(100% )"
                        }}
                    >
                        <div className='px-4'>
                            <hr className=' w-full h-[1px] m-auto border-none max-w-[540px]  mt-[-4px] '
                                style={{ backgroundColor: temaEscuro ? "#5f6368" : "#e8eaed" }}
                            />
                        </div>
                        {historicoPesquisa.slice(0, 10).map((historico, id) =>
                            <ItemHistorico item={historico} key={id} event={() => excluirPesquisa(id)} />
                        )}
                        <div className='flex flex-row justify-center items-center gap-3 py-4 mt-1'>
                            <Botao children={"Pesquisa Google"} onClick={e => handleSearch(e)} />
                            <Botao children={"Estou com sorte"} onClick={e => handleSearch(e)} />
                        </div>
                    </div>
                    :
                    null
                }

            </div>
            <div className='flex flex-row justify-center items-center gap-3 mt-1.5'>
                <Botao children={"Pesquisa Google"} onClick={e => handleSearch(e)} />
                <Botao children={"Estou com sorte"} onClick={e => handleSearch(e)} />
            </div>
        </>
    )
}

export default BarraPesquisa