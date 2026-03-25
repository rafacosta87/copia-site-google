import { useEffect, useState } from "react"
import { ContextoTema } from "./ContextoTema"

function ProvedorTema({ children }) {
    const [temaEscuro, setTemaEscuro] = useState(localStorage.getItem("tema") == "escuro" )  

    useEffect(() => {
        localStorage.setItem("tema", temaEscuro ? "escuro" : "claro")
    }, [temaEscuro])

    function trocarTema() {
        setTemaEscuro(prev => !prev)
    }

    return <ContextoTema.Provider value={{ temaEscuro, trocarTema }}>{children}</ContextoTema.Provider>
}

export default ProvedorTema