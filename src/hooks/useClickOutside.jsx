import { useEffect } from 'react'

export default function useClickOutside(ref, handler) {
  useEffect(() => {
    // 1. Função para capturar o clique fora
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        handler(e)
      }
    }

    // 2. Função nova para capturar o clique na tecla ESC
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        handler(e)
      }
    }

    // Adiciona os dois ouvintes no documento
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    // Limpa AMBOS os ouvintes ao desmontar para evitar lentidão/vazamento de memória
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [ref, handler])
}
