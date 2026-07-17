const IconeTradutor = (props) => {
  return (
   <svg viewBox="0 0 48 48" {...props}>
      {/* Fundo Azul */}
      <path fill="#4285F4" d="M42,41c0,1.7-1.3,3-3,3H9c-1.7,0-3-1.3-3-3V9c0-1.7,1.3-3,3-3h30c1.7,0,3,1.3,3,3V41z" />
      {/* Detalhe Branco/Geral */}
      <path fill="#FFF" d="M23 15h12v2h-5c-.7 3.3-2.5 6.4-5 8.9l4 4-1.4 1.4-4-4-4 4-1.4-1.4 4-4c-2-2-3.5-4.4-4.2-7h2.2c.6 1.9 1.7 3.7 3.1 5.2 2-2 3.4-4.4 4-6.9H17v-2h6v-2h2v2zm-7 15h16v2H16v-2z" />
      {/* Símbolo "A" Dobrado em Branco */}
      <path fill="#FFF" d="M19.1 19.5h2l3.4 9h-2.1l-.8-2.3h-3.1l-.8 2.3h-2l3.4-9zm.1 5.1h1.9l-.9-2.8-.9 2.8z" />
      {/* Símbolo de Caractere Asiático Comercial em Branco */}
      <path fill="#FFF" d="M30 22h3v1.5h-3V25h-1.5v-1.5H26V22h2.5v-1.5h-3V19H28v-1.5h1.5V19h2.5v1.5h-2V22z" />
    </svg>
  );
};

export default IconeTradutor;