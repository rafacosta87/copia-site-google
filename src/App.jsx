import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'
import ProvedorTema from './components/ProvedorTema'
import { Tooltip } from 'react-tooltip'
import "react-tooltip/dist/react-tooltip.css"

function App() {
 
  return (
    <>
        <div className='flex flex-col justify-between items-center h-screen w-screen '>
      <ProvedorTema>                                                                         {/*ProvedorTema(l4) recebendo as tags como children e passando para elas "temaEscuro(estado) e trocarTema(função*/}
          <Cabecalho />
          <Conteudo />
          <Rodape />
          <Tooltip id='tooltip' place='bottom' style={{backgroundColor: "#2d2d2d", fontSize: "12px" , padding: "5px"}}/>
      </ProvedorTema>
        </div>
    </>
  )
}


export default App
