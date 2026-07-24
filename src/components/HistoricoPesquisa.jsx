import React from 'react';
import ItemHistorico from './ItemHistorico';
import Botao from './Botao';

function HistoricoPesquisa({ historicoPesquisa, setHistoricoPesquisa, temaEscuro }) {
    
    const removerHistorico = (idParaRemover) => {
        setHistoricoPesquisa(prev => prev.filter((_, id) => id !== idParaRemover));
    };

    return (
        <div className={`
            absolute top-[49px] w-full max-w-[688px] flex flex-col rounded-b-[24px] pb-4 z-30
            ${temaEscuro
                ? 'bg-[#303134] shadow-none left-[0]'
                : 'bg-white shadow-[0_4px_6px_rgba(32,33,36,.28)] left-[-1px]'
            }
        `}>
            <div className="px-4 mb-2">
                <hr className={`border-t ${temaEscuro ? 'border-[#5f6368]' : 'border-[#e8eaed]'} `} />
            </div>
            {historicoPesquisa.slice(0, 10).map((historico, id) => (
                <ItemHistorico
                    key={id}
                    item={historico}
                    event={() => removerHistorico(id)}
                />
            ))}
            <div className='flex justify-center gap-3 py-4 mt-1'>
                <Botao type="submit">Pesquisa Google</Botao>
                <Botao type="button">Estou com sorte</Botao>
            </div>
        </div>
    );
}

export default HistoricoPesquisa;
