/* eslint-disable no-unused-vars */
import IconeLupa from '../icones/IconeLupa'
import IconeTeclado from '../icones/IconeTeclado'
import IconeMicrofone from '../icones/IconeMicrofone'
import IconeFoto from '../icones/IconeFoto'
import { useState, useEffect, useRef } from 'react'
import IconeX from '../icones/IconeX'
import ItemHistorico from './ItemHistorico'
import Botao from './Botao'




function BarraPesquisa() {
    const [historicoPesquisa, setHistoricoPesquisa] = useState(JSON.parse(localStorage.getItem("historicoPesquisa") ?? "[]"))              //aqui ira pegar no localStorage a key "historicoPesquisa", caso ela não exista(estiver vazia), ai pegara o valor a frente array vazio([]). Isso é para evitar erro, pq mais abaixo iremos mapear(l 83) historico pesquisa, e se não fizermos isso dara erro pq não da para mapear algo que não exista. 
    const [pesquisa, setPesquisa] = useState("")
    const [focused, setFocused] = useState(false)                                                                                          //estado para verificar se textarea esta focado
    const searchbarRef = useRef()                                                                                                           

    useEffect(() => {                                                                                                                      //salvando as tarefas no localStorage
        if (historicoPesquisa) {                                                                                                           //se receber tarefas , ira transformalas em JSON e salvalas no localStorage
            localStorage.setItem("historicoPesquisa", JSON.stringify(historicoPesquisa))
        }
    }, [historicoPesquisa])

    useEffect(() => {
        function handleClickOutside(e) {
            if (searchbarRef.current && !searchbarRef.current.contains(e.target)) {
                setFocused(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => { document.removeEventListener("mousedown", handleClickOutside) }
    }, [])

    function handleSearch(event) {
                                                                                                                                            //handleSearch recebera um evento se esse evento for a tecla Enter executara a função                                                                                                                           
        if (event.code == "Enter" || event.button == 0) {
            event.preventDefault()                                                                                                          //prrevenir um evento padrão , no caso aqui estamos pegando event.code == Enter, o Enter dentro da tag textarea, quando clicado ele pulara uma linha e não queremos este comportamento , para isso usamos o "preventDefault"                                                                              
            if (pesquisa.trim() == "") {                                                                                                    //pesquisa não aceitara valor vazio e nem espaços vazios
                return                                   
            }
            const novoHistoricoPesquisa = [...historicoPesquisa]
            if (historicoPesquisa.filter(historico => historico == pesquisa).length > 0) {                                                 //vendo se recebeu uma pesquisa ja existente, abaixo esta pegando o indice da pesquisa ja existente no array , para deletar ela , e não a pesquisa nova 
                const index = novoHistoricoPesquisa.findIndex(historico => historico == pesquisa)
                novoHistoricoPesquisa.splice(index, 1)
            }
            novoHistoricoPesquisa.unshift(pesquisa)                                                                                         //passando a nova pesquisa para o array, usamos o unshift para colocar a nova pesquisa no começo do array, o push que usamos habitualmente adiciona ao final do array .E abaixo esta pasando o array para historicoPesquisa
            setHistoricoPesquisa(novoHistoricoPesquisa)
            setPesquisa("")                                                                                                                  //limpando o textarea , para receber a nova pesquisa
            window.location.href = `https://www.google.com/search?q=${pesquisa}`                                                             //ira receber a pesquisa e direcionara no site do google a pesquisa feita
           
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
                ref={searchbarRef}
                style={{ borderRadius: focused ? "26px 26px 0px 0px" : "26px", backgroundColor: focused ? "#303134" : "#4d5156" }}
                className=' relative bg-[#4d5156] hover:bg-[#63676d]  flex flex-row justify-between items-center w-full max-w-[580px] h-[50px] rounded-[26px] px-5 py-7'>
                <div className='cursor-pointer' onClick={e => handleSearch(e)}>
                    <IconeLupa />
                </div>
                <div className=' w-full '>
                    <textarea
                        onFocus={() => setFocused(true)}                                                                                                              //quando estiver em foco passara true para focused , executara a linha 56 e 78                                                                                                             //quando estiver sem foco ira passar false para focused , ou seja deixara de executar                     
                        rows="1"
                        className=' w-full max-w-[400px] focus:outline-none p-2 text-[#e8eaed] text-[16px] resize-none'
                        onKeyDown={e => handleSearch(e)}                                                                                                              //quando clicar no enter , executara a função(l 41), passando um evemto para ela 
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center'>
                    {pesquisa != "" ?                                                                                                                                 //se for diferente de string vazia , mostrara o "x" para limpar o campo
                        <div className='cursor-pointer border-r-[1px] pr-[12px] py-1.5 border-[#5f6368] '
                            onClick={limparPesquisa}
                        >
                            <IconeX />
                        </div>
                        : null}
                    <IconeTeclado />
                    <IconeMicrofone />
                    <IconeFoto />
                </div>

                {focused ?
                    <div className='absolute  w-full max-w-[580px] top-[50px] bg-[#303134] left-0 flex flex-col  rounded-b-[26px] py-2 overflow-hidden '>       {/*a div filha absolute em relação div pai. Observamos que na linha 57 tem o estilo relative na div pai , e nesta div o absolute, fazemos isso para posicionar o menu suspenso, ele também não empurrara mada. Abaixo estmos mapeando os itens que ficaram no menu */}
                        <div className='px-4'>
                            <hr className=' w-full h-[1px] m-auto border-none max-w-[540px] bg-[#5f6368] mt-[-4px] ' />
                        </div>
                        {historicoPesquisa.slice(0, 10).map((historico, id) =>                                                                                      /*função slice cria uma cópia do array original pegando apenas os indices entre os intervalos passados, aqui no caso ira pegar os indices entre 0 há 10. Pq só queremos mostrar no histórico de pesquisa as dez primeiras pesquisas  */
                            <ItemHistorico item={historico} key={id} event={() => excluirPesquisa(id) } />
                        )}
                        <div className='flex flex-row justify-center items-center gap-3 py-4 mt-1'>
                            <Botao children={"Pesquisa Google"} onClick={e => handleSearch(e)} />
                            <Botao children={"Estou com sorte"} />
                        </div>
                    </div>
                    :
                    null
                }

            </div>
            <div className='flex flex-row justify-center items-center gap-3 mt-1.5'>
                <Botao children={"Pesquisa Google"} onClick={e => handleSearch(e)} />
                <Botao children={"Estou com sorte"} />
            </div>
        </>
    )
}

export default BarraPesquisa