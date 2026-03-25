
import IconeGoogle from '../icones/IconeGoogle'
import BarraPesquisa from './BarraPesquisa'
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'




function Conteudo() {
const {temaEscuro} = useContext(ContextoTema)

  return (
    <>
      <div className='flex flex-col items-center h-full w-full px-5.5 pt-49'
      style={{ backgroundColor: temaEscuro ? "#202124" : "#fff" }}
      >

        <IconeGoogle />

        <BarraPesquisa />
      </div>
    </>
  )
}


export default Conteudo
