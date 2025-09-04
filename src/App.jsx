//fazer um breakṕoint de 816px para responsividade ficar melhor,
//melhorar responsividade quando a tela deita
//ver no text area o que realmente é necessário

import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'
import ProvedorTema from './components/ProvedorTema'

function App() {
 

  return (
    <>
        <div className='flex flex-col justify-between items-center h-screen w-screen '>
      <ProvedorTema>
          <Cabecalho />
          <Conteudo />
          <Rodape />
      </ProvedorTema>
        </div>
    </>
  )
}


export default App
