import { useState, useRef, useContext } from "react"
import useClickOutside from '../hooks/useClickOutside'
import IconeLua from "../icones/IconeLua"
import IconeSol from "../icones/IconeSol"
import { ContextoTema } from "./ContextoTema"

// 1. Sub-componente para links (Reutilização e Limpeza)
const FooterLink = ({ href, children }) => (
    <a 
        href={href} 
        className="hover:underline whitespace-nowrap text-inherit"
    >
        {children}
    </a>
);

function Rodape() {
    const [focused, setFocused] = useState(false);
    const searchbarRef = useRef();
    const { temaEscuro, trocarTema } = useContext(ContextoTema);

    const toggleMenu = (e) => {
        e.preventDefault();
        setFocused(!focused);
    };

    useClickOutside(searchbarRef, () => setFocused(false));

    // Classe comum para os itens do menu suspenso
    const itemMenuClass = `group flex justify-between items-center w-full py-[4px] px-4 transition-colors ${
        temaEscuro ? "hover:bg-[#3c4043] text-white" : "hover:bg-[#f1f3f4] text-[#1f1f1f]"
    }`;

    return (
        <footer 
            
            className={`w-full flex flex-col text-[14px] ${
                temaEscuro ? "bg-[#171717] text-[#e8eaed]" : "bg-[#f2f2f2] text-[#1f1f1f]"
            }`}
        >
            {/* Seção Localização (Brasil) */}
            <div className={`px-[30px] py-[13px] border-b ${
                temaEscuro ? "border-[#444746]" : "border-[#dadce0]"
            }`}>
                Brasil
            </div>

            {/* Container dos Links com o Breakpoint de 816px */}
            <div className="flex flex-wrap w-full justify-between max-[816px]:justify-center">
                
                {/* Lado Esquerdo */}
                <div className="flex flex-wrap justify-evenly gap-x-7 px-[30px] py-[13px]">
                    <FooterLink href="https://about.google/?utm_source=google-BR&utm_medium=referral&utm_campaign=hp-footer&fg=1">Sobre</FooterLink>
                    <FooterLink href="https://business.google.com/br/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">Publicidade</FooterLink>
                    <FooterLink href="https://business.google.com/br/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">Negócios</FooterLink>
                    <FooterLink href="https://www.google.com/search/howsearchworks/?fg=1">Como funciona a Pesquisa</FooterLink>
                </div>

                {/* Lado Direito */}
                <div className="flex flex-wrap justify-evenly gap-x-7 px-[30px] py-[13px]">
                    <FooterLink href="https://policies.google.com/privacy?hl=pt-BR&fg=1">Privacidade</FooterLink>
                    <FooterLink href="https://policies.google.com/terms?hl=pt-BR&fg=1">Termos</FooterLink>
                    
                    <div className="relative" ref={searchbarRef}>
                        <button 
                            onClick={toggleMenu} 
                            className="hover:underline focus:outline-none"
                            
                        >
                            Configurações
                        </button>

                        {/* Menu de Configurações (Subindo) */}
                        {focused && (
                            <div className={`absolute bottom-full mb-3 right-0 min-w-[210px] py-1.5 rounded-lg z-50 overflow-hidden ${
                                temaEscuro ? "bg-[#1f1f1f] shadow-[0_2px_10px_0_rgba(0,0,0,0.2)]" : "bg-white border border-[#dadce0] shadow-[0_2px_10px_0_rgba(0,0,0,0.2)]"
                            }`}>
                                <a className={itemMenuClass} href="https://www.google.com/preferences?hl=pt-BR&authuser=0&fg=1">Configurações de Pesquisa</a>
                                <a className={itemMenuClass} href="https://www.google.com/advanced_image_search?hl=pt-BR&fg=1#">Pesquisa avançada</a>
                                <a className={itemMenuClass} href="https://myaccount.google.com/yourdata/search?utm_source=googlemenu&fg=1">Seus dados na Pesquisa</a>
                                <a className={itemMenuClass} href="https://myactivity.google.com/product/search?utm_source=google&hl=pt-BR&fg=1">Histórico de pesquisa</a>
                                <a className={itemMenuClass} href="https://support.google.com/websearch/?visit_id=638924140740722753-434693643&hl=pt-BR&rd=2#topic=3378866">Ajuda da Pesquisa</a>
                                <a className={itemMenuClass} href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl">Enviar feedback</a>
                                
                                <hr className={`my-1.5 border-t ${temaEscuro ? "border-[#444746]" : "border-[#dadce0]"}`} />
                                
                                {/* Botão de Troca de Tema com Efeito de Ícone Fantasma */}
                                <button 
                                    onClick={(e) => { e.preventDefault(); trocarTema(); }}
                                    className={`${itemMenuClass} py-[7px]`}
                                >
                                    <span>Tema escuro: {temaEscuro ? "ativado" : "desativado"}</span>
                                    {/* Ícone: invisível por padrão, aparece no hover do 'group' */}
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                        {temaEscuro ? <IconeLua /> : <IconeSol />}
                                    </div>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Rodape;

