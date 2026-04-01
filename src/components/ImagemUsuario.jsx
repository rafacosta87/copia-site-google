/* eslint-disable no-unused-vars */
import { useRef, useState } from "react"
import { useContext } from 'react'
import { ContextoTema } from './ContextoTema'
import { Tooltip } from "react-tooltip"

function ImagemUsuario() {
    const [nomeUsuario, setNomeUsuario] = useState("Maria")
    const [image, setImage] = useState(sessionStorage.getItem("image"))
    const inputRef = useRef()
    const {temaEscuro} = useContext(ContextoTema)

    function handleImageUpload(event) {
        const file = event.target.files[0]
        if (!file) {
            return
        }
        const reader = new FileReader()
        reader.onloadend = () => {
            const base64String = reader.result
            setImage(base64String)
            sessionStorage.setItem("image", base64String)
        }
        reader.readAsDataURL(file)
    }
 


    return (
        
        <div className={`${temaEscuro? "hover:bg-[#303134]" : "hover:bg-[rgba(60,64,67,.08)]"}  rounded-full p-[5px]`}>
            <input
                type="file"
                hidden
                ref={inputRef}
                onChange={handleImageUpload}
                accept="image/*"
            />
            <div className='bg-[#4527a0] h-8 w-8 rounded-full cursor-pointer overflow-hidden flex justify-center items-center text-xl text-white font-[Arial]'
                onClick={() => inputRef.current.click()}
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