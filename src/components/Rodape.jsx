/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect, useContext } from "react"
import IconeLua from "../icones/IconeLua"
import IconeSol from "../icones/IconeSol"
import { ContextoTema } from "./ContextoTema"

function Rodape() {
    const [focused, setFocused] = useState(false)                                                                                          //estado para verificar se textarea esta focado
    const searchbarRef = useRef()
    const { temaEscuro, trocarTema } = useContext(ContextoTema)

    function AbrirMenu(e) {                                                                                                                //função para abrir e fechar o menu
        e.preventDefault()                                                                                                                 //aqui estamos evitando o evento padrão da tag a(link) de atualizar a pagina ao clique
        setFocused(!focused)
    }

    useEffect(() => {                                                                                                                       //função para fechar o menu de configurações quando clicamos fora dele , essa função é igual a que fizemos no componente BarraDePesquisa                                        
        function handleClickOutside(e) {
            if (searchbarRef.current && !searchbarRef.current.contains(e.target)) {
                setFocused(false)
                console.log(searchbarRef.current)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => { document.removeEventListener("mousedown", handleClickOutside) }
    }, [])

    return (
        <>
            <div ref={searchbarRef} className="w-full flex flex-col ">

                <div
                    className="flex justify-start w-full   text-[14px] px-[30px] py-[12px] border-b-1 "
                    style={{
                        backgroundColor: temaEscuro ? "#171717" : "#f2f2f2",
                        color: temaEscuro ? "#e8eaed" : "#1f1f1f",
                        borderColor: temaEscuro ? "#444746" : "#dadce0"
                    }}
                >
                    Brasil
                </div>
                <div
                    className="flex flex-wrap w-full text-[14px] justify-between breakpoint"
                    style={{
                        backgroundColor: temaEscuro ? "#171717" : "#f2f2f2",
                        color: temaEscuro ? "#e8eaed" : "#1f1f1f",
                    }}
                >
                    <div className="flex flex-row justify-evenly flex-wrap gap-7.5 px-[30px] py-[12px] ">
                        <a className="hover:underline" href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">Sobre</a>
                        <a className="hover:underline" href="https://business.google.com/br/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Publicidade</a>
                        <a className="hover:underline" href="https://business.google.com/br/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Negócios</a>
                        <a className="hover:underline" href="https://www.google.com/search/howsearchworks/?fg=1">Como funciona a Pesquisa</a>
                    </div>
                    <div className="flex flex-row justify-evenly flex-wrap gap-7.5 px-[30px] py-[12px] ">
                        <a className="hover:underline" href="https://policies.google.com/privacy?hl=pt-BR&fg=1">Privacidade</a>
                        <a className="hover:underline" href="https://policies.google.com/terms?hl=pt-BR&fg=1">Termos</a>
                        <div className="relative ">

                            <a className="hover:underline" onClick={e => AbrirMenu(e)} href="">Configurações</a>                                      {/*a barra de menu abaixo(l47 a l58) esta relative a este botão Configurações , observamos que tem uma tag div(l 42) envolvendo os 2. Observamos que passamos relative para div que envolve os 2 e absolute para o menu(l 47*/}

                            {focused &&                                                                                                                /*quando botão(Configurações) estiver focado abrira o menu , caso contrario ele ficara fechado */
                                <div
                                    className="absolute flex flex-col text-[14px] rounded-[8px] py-[5px] bottom-8 whitespace-nowrap -right-4"
                                    style={{
                                        backgroundColor: temaEscuro ? "#1f1f1f" : "#fff",
                                        color: temaEscuro ? "#fff" : "#1f1f1f",
                                    }}
                                >                                                                                                                        {/*aqui estamos melhorando o posicionando do menu sobre o botão configurações nos estilos "bottom-8 e -right-4" */}
                                    <a
                                        className={`pt-[4px] pb-[4px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href="https://www.google.com/preferences?hl=pt-BR&authuser=0&fg=1">Configurações de Pesquisa</a>
                                    <a
                                        className={`pt-[4px] pb-[4px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href="https://www.google.com/advanced_image_search?hl=pt-BR&fg=1">Pesquisa avançada</a>
                                    <a
                                        className={`pt-[4px] pb-[4px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1">Seus dados na Pesquisa</a>
                                    <a
                                        className={`pt-[4px] pb-[4px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href="https://myactivity.google.com/product/search?utm_source=google&hl=pt-BR&fg=1">Histórico de pesquisa</a>
                                    <a
                                        className={`pt-[4px] pb-[4px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href="https://support.google.com/websearch/?visit_id=638924140740722753-434693643&hl=pt-BR&rd=2#topic=3378866">Ajuda da Pesquisa</a>
                                    <a
                                        className={`pt-[4px] pb-[4px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl">Enviar feedback</a>
                                    <hr
                                        className=' w-full h-[1px] m-auto border-none bg-[#444746] mt-[5px] mb-[5px]'
                                        style={{ backgroundColor: temaEscuro ? "#444746" : "#dadce0" }}
                                    />

                                    <a
                                        onClick={(e) => {
                                            e.preventDefault()                                                                                         //aqui estamos evitando o evento padrão da tag a(link) de atualizar a pagina ao clique
                                            trocarTema()
                                        }}
                                        className={`pb-[6px] pt-[11px] px-[16px] ${temaEscuro ? "hover:bg-[#3c4043] " : "hover:bg-[#e5e5e5]"}`}
                                        href=""
                                    >
                                        {
                                            temaEscuro ?
                                                <div className="flex flex-row justify-between text-transparent hover:text-[#9e9e9e] "

                                                >
                                                    <div
                                                        style={{ color: "#fff" }}
                                                    >
                                                        Tema escuro: ativado
                                                    </div>
                                                    <div ><IconeLua /> </div> </div>
                                                :
                                                <div className="flex flex-row justify-between text-transparent  hover:text-[#5e5e5e]">
                                                    <div
                                                        style={{ color: "#1f1f1f" }}
                                                    >
                                                        Tema escuro: desativado
                                                    </div>  <div ><IconeSol /> </div> </div>
                                        }
                                    </a>
                                </div>
                            }
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}


export default Rodape