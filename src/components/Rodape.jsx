/* eslint-disable no-unused-vars */
import { useState, useRef, useEffect } from "react"

function Rodape() {
    const [focused, setFocused] = useState(false)                                                                                          //estado para verificar se textarea esta focado
    const searchbarRef = useRef()
    const [temaEscuro, setTemaEscuro] = useState(true)

    function AbrirMenu(e) {
        e.preventDefault()
        setFocused(!focused)
    }

    useEffect(() => {
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

                <div className="flex justify-start w-full  bg-[#171717] text-[#e8eaed] text-[14px] px-[30px] py-[12px] border-b-1 border-[#444746]">
                    Brasil
                </div>
                <div className="flex flex-wrap w-full  bg-[#171717] text-[#e8eaed] text-[14px] justify-between breakpoint" >
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

                        <a className="hover:underline" onClick={e => AbrirMenu(e)} href="">Configurações</a>
                       
                {focused &&
                    <div className="absolute bg-[#1f1f1f] flex flex-col text-[#fff] text-[14px] rounded-[8px] py-[5px] bottom-8 whitespace-nowrap -right-4">
                        <a className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="https://www.google.com/preferences?hl=pt-BR&authuser=0&fg=1">Configurações de Pesquisa</a>
                        <a className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="https://www.google.com/advanced_image_search?hl=pt-BR&fg=1">Pesquisa avançada</a>
                        <a className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1">Seus dados na Pesquisa</a>
                        <a className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="https://myactivity.google.com/product/search?utm_source=google&hl=pt-BR&fg=1">Histórico de pesquisa</a>
                        <a className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="https://support.google.com/websearch/?visit_id=638924140740722753-434693643&hl=pt-BR&rd=2#topic=3378866">Ajuda da Pesquisa</a>
                        <a className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl">Enviar feedback</a>
                        <a onClick={(e) => { 
                            e.preventDefault()
                            setTemaEscuro(!temaEscuro)
                            }} className="pt-[4px] pb-[4px] px-[16px] hover:bg-[#3c4043]" href="">Tema escuro: {temaEscuro ? "ativado" : "desativado"}</a>
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