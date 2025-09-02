/* eslint-disable no-unused-vars */
//colocamos o componente itemHistorico diretamente no código e o botão excluir não sumia no desfoco
import { useRef, useState } from "react"

function ImagemUsuario() {
    const [nomeUsuario, setNomeUsuario] = useState("Maria")
    const [image, setImage] = useState(sessionStorage.getItem("image"))
    const inputRef = useRef()

    function handleImageUpload(event) {                                                                               //função recebera um event                         
        const file = event.target.files[0]                                                                            //pegando o primeiro elemento do array e passando para file
        if (!file) {                                                                                                  //se não vier nada retorna e sai da função
            return
        }
        const reader = new FileReader()
        reader.onloadend = () => {
            const base64String = reader.result
            setImage(base64String)
            sessionStorage.setItem("image", base64String)
        }
        reader.readAsDataURL(file)                                                                                    //primera parte da função é esta, onde ira ler o file(l 11), para depois sim entrar na linha 15 e executar o restante, onde acabara passamdo dado para image(setImage(l 18) e para sessionStorage(l19). Acho que esse tipo de função é usado quando temos que receber um dado do input file, pq esse dado é arquivo do nosso pc , onde temos que tratalo para salva-lo dentro de um useState , sessionStorage, localStorage , banco de dados , etc
    }
 


    return (
        <div className='hover:bg-gray-700 rounded-full p-1'>
            <input
                type="file"                                                                                          //input do tipo file , é para buscarmos arquivos dentro do nonsso computador. Quando tiver a ação do clique abrira uma aba para escolhermos um arquivo , dentre os que estão salvos no pc
                hidden                                             
                ref={inputRef}                                                                                       //aqui, ao click(linha 36) ira focar neste input por conta do inputRef, ou seja ira executalo e como é um input file, abrira uma aba para escolhermos um arquivo          
                onChange={handleImageUpload}                                                                         //onChange ira receber um evento e passar para função handleImageUpload(l 10) 
                accept="image/*"                                                                                     //só aceitara arquivos do tipo image
            />
            <div className='bg-purple-800 h-8 w-8 rounded-full cursor-pointer overflow-hidden flex justify-center items-center text-xl text-white font-[Arial]'
                onClick={() => inputRef.current.click()}                                                             //ao click ira focar no input, por conta do  ref={inputRef}(l 31)  
            >
                {image ?
                    <img src={image} alt="" />
                    :
                    nomeUsuario[0]
                }
            </div>
        </div>
    )
}
export default ImagemUsuario