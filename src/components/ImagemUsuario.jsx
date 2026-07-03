import { useRef, useState, useContext, useEffect } from "react";
import { ContextoTema } from './ContextoTema';
import { UserRoundPen } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import useClickOutside from '../hooks/useClickOutside'

function ImagemUsuario() {
    const { temaEscuro } = useContext(ContextoTema);
    const containerRef = useRef();
    const inputRef = useRef();

    // 1. Estado Oficial (O que aparece no ícone e no Storage)
    const [usuario, setUsuario] = useState(() => {
        const salvo = sessionStorage.getItem("dadosUsuario");
        return salvo ? JSON.parse(salvo) : { nome: "", email: "", foto: null };
    });

    // 2. Estado de Rascunho (O que o usuário digita no formulário antes de salvar)
    const [rascunho, setRascunho] = useState(usuario);
    const [modalAberto, setModalAberto] = useState(false);
    const [erroEmail, setErroEmail] = useState(false);

    // Sincroniza o rascunho com o oficial sempre que o modal abrir
    useEffect(() => {
        if (modalAberto) {
            setRascunho(usuario);
            setErroEmail(false);
        }
    }, [modalAberto, usuario]);

    useClickOutside(containerRef, () => setModalAberto(false));

    // Validação e Salvamento Final
    const validarESalvar = () => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (rascunho.email && !regexEmail.test(rascunho.email)) {
            setErroEmail(true);
            return;
        }
        // Atualiza o estado oficial e o Storage
        setUsuario(rascunho);
        sessionStorage.setItem("dadosUsuario", JSON.stringify(rascunho));
        setModalAberto(false);
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onloadend = () => {
            setRascunho(prev => ({ ...prev, foto: reader.result }));
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="relative flex items-center justify-center" ref={containerRef}>
            {/* Ícone de Perfil (Usa o estado 'usuario') */}
            <div
                data-tooltip-id="tooltip-perfil"
                onClick={() => setModalAberto(!modalAberto)}
                className={`
                    w-8 h-8 rounded-full overflow-hidden flex justify-center items-center cursor-pointer 
                    transition-shadow duration-200 ease-in-out border border-transparent 
                    ${modalAberto
                        ? (temaEscuro ? "shadow-[0_0_0_6px_#303134]" : "shadow-[0_0_0_6px_#e5e7eb]")
                        : ""
                    }
    ${temaEscuro ? "hover:shadow-[0_0_0_5px_#303134]" : "hover:shadow-[0_0_0_5px_#e5e7eb]"}

                    ${!usuario.foto ? "bg-[#4527a0] text-white" : ""}
                `}
            >
                {usuario.foto ? (
                    <img src={usuario.foto} alt="Perfil" className="w-full h-full object-cover" />
                ) : usuario.nome.trim() !== "" ? (
                    <span className="font-medium text-lg">{usuario.nome[0].toUpperCase()}</span>
                ) : (
                    <UserRoundPen size={20} strokeWidth={1.5} />
                )}
            </div>

            {/* Tooltip (Usa o estado 'usuario') */}
            {(usuario.nome || usuario.email) && (
                <Tooltip
                    id="tooltip-perfil"
                    place="bottom-end"
                    offset={10}
                    className="z-60 !opacity-100"
                    style={{
                        backgroundColor: "#3c4043",
                        color: "#fff",
                        borderRadius: "4px",
                        fontSize: "13px",
                        padding: "5px 10px"
                    }}
                >
                    {/* Em vez de 'render', passamos o conteúdo como filhos (children) */}
                    <div className="flex flex-col items-start  text-[#aaadb2] leading-tight">
                        <span className="text-white">Conta do Google</span>
                        <span >{usuario.nome}</span>
                        <span >{usuario.email}</span>
                    </div>
                </Tooltip>
            )}

            {/* Modal de Formulário (Usa o estado 'rascunho') */}
            {modalAberto && (
                <div className={`
                    absolute top-12 right-0 w-72 p-5 rounded-2xl shadow-2xl z-50 border
                    ${temaEscuro ? "bg-[#2d2e30] border-[#3c4043] text-white" : "bg-white border-[#dadce0] text-gray-800"}
                `}>
                    <h3 className="font-medium mb-4">Editar Perfil</h3>

                    <div className="flex flex-col gap-4">
                        {/* Prévia da Foto no formulário */}
                        <div className="flex flex-col items-center gap-2">
                            <div className="w-16 h-16 rounded-full bg-[#4527a0] overflow-hidden flex items-center justify-center text-white">
                                {rascunho.foto ? (
                                    <img src={rascunho.foto} className="w-full h-full object-cover" />
                                ) : (
                                    <UserRoundPen size={32} />
                                )}
                            </div>
                            <button onClick={() => inputRef.current.click()} className="text-xs text-blue-500 hover:underline">
                                Alterar foto
                            </button>
                            <input type="file" hidden ref={inputRef} onChange={handleImageUpload} accept="image/*" />
                        </div>

                        <input
                            value={rascunho.nome}
                            onChange={(e) => setRascunho(prev => ({ ...prev, nome: e.target.value }))}
                            placeholder="Nome"
                            className={`p-2 rounded-lg text-sm border focus:outline-none focus:ring-1 focus:ring-blue-500 ${temaEscuro ? "bg-[#1f1f1f] border-[#3c4043]" : "bg-gray-50 border-gray-200"}`}
                        />

                        <div className="flex flex-col gap-1">
                            <input
                                value={rascunho.email}
                                onChange={(e) => {
                                    setErroEmail(false);
                                    setRascunho(prev => ({ ...prev, email: e.target.value }));
                                }}
                                placeholder="E-mail"
                                className={`
        p-2 rounded-lg text-sm border transition-all
        /* 1. Remove o outline padrão e força o anel do Tailwind */
        outline-none focus:outline-none focus:ring-1 
        
        /* 2. Cores de foco e borda base */
        ${erroEmail
                                        ? "border-red-500 ring-red-500"
                                        : "focus:ring-blue-500 border-[#3c4043] "
                                    }
        
        /* 3. Cores de fundo e texto conforme o tema */
        ${temaEscuro
                                        ? "bg-[#1f1f1f] text-white border-[#3c4043]"
                                        : "bg-gray-50 text-gray-800 border-gray-200"
                                    }
    `}
                            />
                            {erroEmail && <span className="text-[10px] text-red-500 ml-1">E-mail inválido</span>}
                        </div>

                        <button
                            onClick={validarESalvar}
                            className="mt-2 bg-blue-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                            Concluir
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ImagemUsuario;
