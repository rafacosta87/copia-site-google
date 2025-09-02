//fazer um breakṕoint de 816px para responsividade ficar melhor,
//melhorar responsividade quando a tela deita
//ver no text area o que realmente é necessário

import Cabecalho from './components/Cabecalho'
import Conteudo from './components/Conteudo'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
      <div className='flex flex-col justify-between items-center h-screen w-screen bg-[#202124] '>
        <Cabecalho />
        <Conteudo />
        <Rodape />
      </div>
    </>
  )
}


export default App
