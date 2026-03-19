import { useEffect, useState } from "react"
import { ContextoTema } from "./ContextoTema"

function ProvedorTema({ children }) {                                                                           //função recebera children , observamos que children tem que estar entre chaves, pois esse valor sera recebido entre as tags, como podemos ver na linha 15
    const [temaEscuro, setTemaEscuro] = useState(localStorage.getItem("tema") == "escuro" )                     //pegando valor de estado(temaEscuro) no localStorage, "tema" é a key. Colocamos '== "escuro"', para o localStorage saber que escuro é a condição true, e salvar o estado certinho , para quando atualizarmos a pagina ou fecharmos , guardar o tema . Se não fizermos isso, ele sempre iniciara com o tema escuro, se atualizar ou abrir e fechar a pagina.  

    useEffect(() => {                                                                                           //função useEffect , ira salvar o valor de tema no localStorage. Ela sera atualizada de acordo do estado de temaEscuro
        localStorage.setItem("tema", temaEscuro ? "escuro" : "claro")
    }, [temaEscuro])

    function trocarTema() {                                                                                      //função que ira variar o estadp de setTemaEscuro
        setTemaEscuro(prev => !prev)
    }

    return <ContextoTema.Provider value={{ temaEscuro, trocarTema }}>{children}</ContextoTema.Provider>          //ContextoProvider(l 2) recebendo valores de estado e fução, e passara isso ao childreb que ela envolver
}

export default ProvedorTema