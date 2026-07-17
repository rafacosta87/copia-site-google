const IconeGemini = (props) => {
    return (
     <svg 
      viewBox="0 0 24 24" 
      {...props}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Definição do Degradê Oficial de Cores do Gemini */}
        <linearGradient id="gemini-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4285F4" />
          <stop offset="35%" stopColor="#9B51E0" />
          <stop offset="70%" stopColor="#EA4335" />
          <stop offset="100%" stopColor="#FBBC05" />
        </linearGradient>
      </defs>
      
      {/* Vetor da Estrela de Quatro Pontas Curvada */}
      <path 
        d="M12 24C12 17.3726 6.62742 12 0 12C6.62742 12 12 6.62742 12 0C12 6.62742 17.3726 12 24 12C17.3726 12 12 17.3726 12 24Z" 
        fill="url(#gemini-gradient)" 
      />
    </svg>
    );
};

export default IconeGemini;