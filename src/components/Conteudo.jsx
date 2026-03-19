
import IconeGoogle from '../icones/IconeGoogle'
import BarraPesquisa from './BarraPesquisa'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'




function Conteudo() {
const {temaEscuro} = useContext(ContextoTema)

  return (
    <>
      <div className='flex flex-col items-center h-full w-full gap-6 px-5.5 pt-32'
      style={{ backgroundColor: temaEscuro ? "#202124" : "#fff" }}
      >

        <IconeGoogle />

        <BarraPesquisa />
      </div>
    </>
  )
}


export default Conteudo
