

import IconeCabecalho from '../icones/IconeCabecalho'
import ImagemUsuario from './ImagemUsuario'

function Cabecalho() {


  return (
    <>
      <div className='w-screen flex flex-row gap-2 justify-center items-center' style={{ fontFamily: "Google Sans,Arial,sans-serif" }}>
        <nav className=' w-full flex flex-row justify-end items-center text-[12px] gap-4 p-3'>
          <a className='hover:underline text-white' href="https://mail.google.com/mail/u/0/?ogbl#inbox">Gmail</a>
          <a className='hover:underline text-white' href="https://www.google.com/imghp?hl=pt-BR&authuser=0&ogbl">Imagens</a>
          <div className='w-10 h-10 hover:bg-[#303134] cursor-pointer rounded-full p-2 flex flex-row justify-center items-center'>
            <IconeCabecalho />
          </div>

          <ImagemUsuario />



        </nav>

      </div>
    </>
  )
}

export default Cabecalho