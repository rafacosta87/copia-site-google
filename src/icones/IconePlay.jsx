const IconePlay = (props) => {
    return (
 <svg 
      viewBox="0 0 48 48" 
      {...props}
    >
      {/* Parte Inferior - Vermelho */}
      <path 
        fill="#ea4335" 
        d="M31.2,30.3L6.9,43.3C6,43.8,5,43.2,5,42.2V5.8c0-1,1-1.6,1.9-1.1l24.3,13c0.9,0.5,0.9,1.8,0,2.3L20.4,24L31.2,30.3z" 
      />
      {/* Parte Esquerda - Azul */}
      <path 
        fill="#4285f4" 
        d="M5,5.8v36.4c0,1,1.1,1.6,2,1l13.4-19.2L7,4.8C6.1,4.2,5,4.8,5,5.8z" 
      />
      {/* Parte Superior - Verde */}
      <path 
        fill="#34a853" 
        d="M6.9,4.7l30.9,16.5c0.9,0.5,0.9,1.8,0,2.3L20.4,24L6.9,4.7z" 
      />
      {/* Parte Direita - Amarelo */}
      <path 
        fill="#fbbc05" 
        d="M37.8,21.2L20.4,24l17.4,2.8c1,0.2,1.7-0.7,1.3-1.6l-1.3-4C39.5,20.3,38.8,21,37.8,21.2z" 
      />
    </svg>
    );
};

export default IconePlay;