import IconeCabecalho from '../icones/IconeCabecalho'
import ImagemUsuario from './ImagemUsuario'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'
import { Tooltip } from 'react-tooltip'

function Cabecalho() {
  const { temaEscuro } = useContext(ContextoTema)
  return (
    <>
      <div className='w-screen flex flex-row gap-2 justify-center items-center font-[Arial,sans-serif]'
        style={{ backgroundColor: temaEscuro ? "#202124" : "#fff" }}>
        <nav className=' w-full flex flex-row justify-end items-center text-[12px] gap-4 p-3'>
          <a className='hover:underline text-white' href="https://mail.google.com/mail/u/0/?ogbl#inbox"
            style={{ color: temaEscuro ? "white" : "rgba(0,0,0,.87)" }}
          >Gmail</a>
          <a className='hover:underline text-white' href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl"
            style={{ color: temaEscuro ? "white" : "rgba(0,0,0,.87)" }}
          >Imagens</a>
          <div className={`w-10 h-10 ${temaEscuro? "hover:bg-[#303134]" : "hover:bg-[rgba(60,64,67,.08)]"} cursor-pointer rounded-full p-2 flex flex-row justify-center items-center`}
            style={{ color: temaEscuro ? "rgb(229, 233, 236)" : "rgba(0,0,0,.87)" }}>
        
            <IconeCabecalho />

          </div>
       
          <ImagemUsuario />
         



        </nav>

      </div>
    </>
  )
}

export default Cabecalho