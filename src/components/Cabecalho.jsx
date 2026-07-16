import IconeCabecalho from '../icones/IconeCabecalho'
import ImagemUsuario from './ImagemUsuario'
import { useContext, useState, useRef } from 'react'
import { ContextoTema } from './ContextoTema'
import useClickOutside from '../hooks/useClickOutside';
import { googleApps } from '../data/appsData'; // Importa a lista de aplicativos

// Sub-componente para links do topo. 
const NavLink = ({ href, children, temaEscuro }) => (
  <a
    href={href}
    className={`hover:underline text-[13px] ${temaEscuro ? "text-white" : "text-[#000000de]"
      }`}
  >
    {children}
  </a>
);

// Novo sub-componente para cada item da lista de apps
const AppMenuItem = ({ app, temaEscuro }) => (
  <a
    href={app.url}
    className={`
      flex flex-col items-center justify-center p-2 rounded-lg transition-colors
      ${temaEscuro ? "hover:bg-[#3c4043]" : "hover:bg-gray-200"}
    `}
  >
    {/* Substitua por um componente de ícone real se tiver um: {app.icon ? <app.icon /> : <div className="w-10 h-10 bg-gray-400 rounded-full"></div>} */}
    {/* Placeholder para o ícone. Você pode substituí-lo por seus próprios componentes de ícone SVG, por exemplo. */}
    <div className={`w-10 h-10 flex items-center justify-center text-xl rounded-full ${temaEscuro ? "bg-[#3c4043] text-white" : "bg-gray-200 text-gray-700"}`}>
      {app.name.charAt(0)} {/* Exibe a primeira letra do nome como um placeholder de ícone */}
    </div>
    <span className="mt-2 text-xs text-center whitespace-nowrap">{app.name}</span>
  </a>
);


function Cabecalho() {
  const { temaEscuro } = useContext(ContextoTema);
  const [appsMenuAberto, setAppsMenuAberto] = useState(false);
  const appsMenuRef = useRef(null);

  useClickOutside(appsMenuRef, () => setAppsMenuAberto(false));

  const toggleAppsMenu = (e) => { // Opcional: Adicionar 'e.stopPropagation()' aqui pode ser útil se houver outros cliques propagando
    e.stopPropagation(); // Descomente se encontrar problemas de propagação de eventos
    setAppsMenuAberto(!appsMenuAberto);
  };

  return (
    <header className={`w-full flex justify-end items-center p-[10px] font-sans ${temaEscuro ? "bg-[#202124]" : "bg-white"
      }`}>
      <nav className="flex flex-row items-center gap-4 pr-2">
        <NavLink href="https://mail.google.com/mail/u/0/?ogbl#inbox" temaEscuro={temaEscuro}>
          Gmail
        </NavLink>
        <NavLink href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl" temaEscuro={temaEscuro}>
          Imagens
        </NavLink>

        {/* Ícone de Apps (Grid) - Contêiner para o botão e o menu dropdown */}
        <div className="relative" ref={appsMenuRef}> {/* <--- A ref agora está neste div pai */}
          <button // <--- Adicionado um elemento button aqui
            onClick={toggleAppsMenu} // <--- O onClick está agora no button
            className={`
              w-10 h-10 flex items-center justify-center cursor-pointer rounded-full p-2 transition-colors focus:outline-none
              ${temaEscuro
                ? `text-[#e5e9ec] ${appsMenuAberto ? "bg-[#303134]" : "hover:bg-[#303134]"}` // Aplica bg quando aberto ou no hover (tema escuro)
                : `text-[#000000de] ${appsMenuAberto ? "bg-gray-200" : "hover:bg-gray-200"}` // Aplica bg quando aberto ou no hover (tema claro)

              }
            `}
          >
            <IconeCabecalho />
          </button>

          {/* Aqui será renderizada a lista de apps */}
          {appsMenuAberto && (
            <div className={`
              absolute top-full mt-3 right-0 w-[280px] rounded-lg shadow-lg p-4 grid grid-cols-3 gap-y-4 gap-x-2 z-50
              ${temaEscuro ? "bg-[#303134] text-white" : "bg-white text-gray-800 border border-gray-200"}
            `}>
              {googleApps.map((app, index) => (
                <AppMenuItem key={index} app={app} temaEscuro={temaEscuro} />
              ))}
            </div>
          )}
        </div>

        <ImagemUsuario />
      </nav>
    </header>
  )
}

export default Cabecalho