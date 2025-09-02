function Botao({children , onClick}) {
    return <button onClick={onClick} className='bg-[#3c4043] text-[#e8eaed]  px-[10px] py-[5px] h-[34px] w-[140px]  text-center cursor-pointer rounded-[8px] text-[14px] hover:border-[1px] hover:border-[#5f6368] ' style={{ fontFamily: "Google Sans,Arial,sans-serif", fontWeight: "400" }}>
        {children}
    </button>
}
export default Botao