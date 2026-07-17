const IconeNoticias = (props) => {
    return (
        <svg viewBox="0 0 48 48" {...props}>
      {/* Aba Vermelha Esquerda */}
      <path fill="#EA4335" d="M24,4H10C7.8,4,6,5.8,6,8v32c0,2.2,1.8,4,4,4h14V4z" />
      {/* Aba Amarela Base Direita */}
      <path fill="#FBBC05" d="M38,44h-14V24h18v16C42,42.2,40.2,44,38,44z" />
      {/* Aba Verde Topo Direito */}
      <path fill="#34A853" d="M38,4H24v20h18V8C42,5.8,40.2,4,38,4z" />
      {/* Cartão de Fundo Branco Centralizado */}
      <path fill="#FFF" d="M12,12h24v24H12V12z" />
      {/* Linhas de Texto do Jornal (Cinza) */}
      <path fill="#757575" d="M16,16h16v2H16V16z M16,22h16v2H16V22z M16,28h10v2H16V28z" />
      {/* Miniatura de Imagem (Azul) */}
      <path fill="#4285F4" d="M28,28h4v4h-4V28z" />
    </svg>
    );
};

export default IconeNoticias;