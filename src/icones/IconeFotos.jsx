import React from 'react';

const IconeFotos = (props) => (
  <svg
    width="1em" // Ajuste o width/height para 1em para que o tamanho seja controlado pelo font-size ou className
    height="1em"
    viewBox="0 0 32 32"
    dataName="Layer 1" // data-name convertido para dataName (camelCase)
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    {...props} // Permite passar classes, onClick, etc.
  >
    {/* As cores originais estão nos paths, então não definirei fill="currentColor" no SVG principal */}
    <path d="M4,16a6,6,0,0,1,12,0Z" fill="#ffba00"/>
    <path d="M22,10a6,6,0,0,1-6,6V4a6,6,0,0,1,6,6" fill="#ea4435"/>
    <path d="M28,16a6,6,0,0,1-12,0Z" fill="#0066da"/>
    <path d="M10,22a6,6,0,0,1,6-6V28a6,6,0,0,1-6-6" fill="#00ac47"/>
  </svg>
);

export default IconeFotos;
