import IconeCabecalho from '../icones/IconeCabecalho'
import ImagemUsuario from './ImagemUsuario'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'

// Sub-componente para links do topo
const NavLink = ({ href, children, temaEscuro }) => (
  <a 
    href={href} 
    className={`hover:underline text-[13px] ${
      temaEscuro ? "text-white" : "text-[#000000de]"
    }`}
  >
    {children}
  </a>
);

function Cabecalho() {
  const { temaEscuro } = useContext(ContextoTema)

  return (
    <header className={`w-full flex justify-end items-center p-[10px] font-sans ${
      temaEscuro ? "bg-[#202124]" : "bg-white"
    }`}>
      <nav className="flex flex-row items-center gap-4 pr-2">
        <NavLink href="https://mail.google.com/mail/u/0/?ogbl#inbox" temaEscuro={temaEscuro}>
          Gmail
        </NavLink>
        <NavLink href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl" temaEscuro={temaEscuro}>
          Imagens
        </NavLink>

        {/* Ícone de Apps (Grid) */}
        <div 
          className={`
            w-10 h-10 flex items-center justify-center cursor-pointer rounded-full p-2 transition-colors
            ${temaEscuro 
              ? "text-[#e5e9ec] hover:bg-[#303134]" 
              : "text-[#000000de] hover:bg-gray-100"
            }
          `}
          title="Google Apps"
        >
          <IconeCabecalho />
        </div>

        <ImagemUsuario />
      </nav>
    </header>
  )
}

export default Cabecalho