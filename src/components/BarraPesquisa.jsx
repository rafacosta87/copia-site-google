import IconeLupa from '../icones/IconeLupa'
import IconeTeclado from '../icones/IconeTeclado'
import IconeMicrofone from '../icones/IconeMicrofone'
import IconeFoto from '../icones/IconeFoto'
import { useState, useEffect, useRef } from 'react'
import IconeX from '../icones/IconeX'
import ItemHistorico from './ItemHistorico'
import Botao from './Botao'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'

function BarraPesquisa() {
    const { temaEscuro } = useContext(ContextoTema)
    const [historicoPesquisa, setHistoricoPesquisa] = useState(JSON.parse(localStorage.getItem("historicoPesquisa") ?? "[]"))              //aqui ira pegar no localStorage a key "historicoPesquisa", caso ela não exista(estiver vazia), ai pegara o valor a frente array vazio([]). Isso é para evitar erro, pq mais abaixo iremos mapear(l 83) historico pesquisa, e se não fizermos isso dara erro pq não da para mapear algo que não exista. 
    const [pesquisa, setPesquisa] = useState("")
    const [focused, setFocused] = useState(false)                                                                                          //estado para verificar se textarea esta focado
    const searchbarRef = useRef()
    const [hovered, setHovered] = useState(false)

    useEffect(() => {                                                                                                                      //salvando as tarefas no localStorage
        if (historicoPesquisa) {                                                                                                           //se receber tarefas , ira transformalas em JSON e salvalas no localStorage
            localStorage.setItem("historicoPesquisa", JSON.stringify(historicoPesquisa))
        }
    }, [historicoPesquisa])

    useEffect(() => {                                                                                                                       //aqui é uma função para fechar o menu suspenso, que se abre abaixo do input, quando o input esta em foco. Pq esse menu tem que ser fechado a partir do clique fora dele.
        function handleClickOutside(e) {
            if (searchbarRef.current && !searchbarRef.current.contains(e.target)) {                                                         //searchbarRef.current(verificando se recebeu o evento(e) clique) &&(e) !searchbarRef.current.contains(e.target)"e se o evento de clique foi fora de searchbarRef(div linha 69, que envolve toda nossa barra de menu, historico e botões), se o clique foi fora desta div executara a linha abaixo, que é fechar o menu de histórico"
                setFocused(false)                                                                                                           //passando false para focused para fechar o menu
            }
        }
        document.addEventListener("mousedown", handleClickOutside)                                                                          //vai execcutar essa função globalmente ao baixar do clique do mouse
        return () => { document.removeEventListener("mousedown", handleClickOutside) }                                                      //limpando os residuos da função da linha acima
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
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
                ref={searchbarRef}
                style={{
                    borderRadius: focused ? "26px 26px 0px 0px" : "26px",
                    backgroundColor: focused ? (temaEscuro ? "#303134" : "#fff") : (temaEscuro ? (hovered ? "#5f6368" : "#4d5156") : "#fff"),
                    boxShadow: focused ? (temaEscuro ? "" : "0 2px 8px 1px rgba(64,60,67,.24)") : (temaEscuro ? "" : (hovered? "0 2px 8px 1px rgba(64,60,67,.24)" : "0px 3px 10px 0px rgba(31, 31, 31, 0.08)") ),
                    border: focused ? (temaEscuro? "" : "") : (temaEscuro? "" : "1px  solid #dadce0")

                }}
                className={` relative flex flex-row justify-between items-center w-full max-w-[580px] h-[50px] rounded-[26px] px-5 py-7 `}>
                <div className='cursor-pointer' onClick={e => handleSearch(e)}>
                    <IconeLupa />
                </div>
                <div className=' w-full '>
                    <textarea
                        onFocus={() => setFocused(true)}                                                                                                              //quando estiver em foco passara true para focused , executara a linha 56 e 78                                                                                                             //quando estiver sem foco ira passar false para focused , ou seja deixara de executar                     
                        rows="1"
                        className=' w-full max-w-[400px] focus:outline-none p-2 text-[16px] resize-none'
                        style={{ color: temaEscuro ? "#e8eaed" : "#000000de" }}
                        onKeyDown={e => handleSearch(e)}                                                                                                              //quando clicar no enter , executara a função(l 41), passando um evemto para ela 
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    >
                    </textarea>
                </div>

                <div className='flex flex-row gap-4 justify-center items-center'
                    style={{ color: temaEscuro ? "#aaadb2" : "#1f1f1f" }}>
                    {pesquisa != "" ?                                                                                                                                 //se for diferente de string vazia , mostrara o "x" para limpar o campo
                        <div className='cursor-pointer border-r-[1px] pr-[12px] py-1.5 '
                            style={{ borderColor: temaEscuro ? "#5f6368" : "#aaadb2" }}
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
                    <div className='absolute  w-full max-w-[580px] top-[50px] left-0 flex flex-col  rounded-b-[26px] py-2  overflow-hidden '
                        style={{
                            backgroundColor: temaEscuro ? "#303134" : "#fff",
                            boxShadow: (temaEscuro ? "" : "0 4px 8px -2px rgba(64,60,67,.24)") ,
                            border: focused ? (temaEscuro? "" : "") : (temaEscuro? "" : "1px  solid #dadce0"),
                            borderTopStyle: "none"
                        }}
                    >                                                                                                                                              {/*a div filha absolute em relação div pai. Observamos que na linha 57 tem o estilo relative na div pai , e nesta div o absolute, fazemos isso para posicionar o menu suspenso, ele também não empurrara mada. Abaixo estmos mapeando os itens que ficaram no menu */}
                        <div className='px-4'>
                            <hr className=' w-full h-[1px] m-auto border-none max-w-[540px]  mt-[-4px] '
                                style={{ backgroundColor: temaEscuro ? "#5f6368" : "#e8eaed" }}
                            />
                        </div>
                        {historicoPesquisa.slice(0, 10).map((historico, id) =>                                                                                      /*função slice cria uma cópia do array original pegando apenas os indices entre os intervalos passados, aqui no caso ira pegar os indices entre 0 há 10. Pq só queremos mostrar no histórico de pesquisa as dez primeiras pesquisas  */
                            <ItemHistorico item={historico} key={id} event={() => excluirPesquisa(id)} />
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