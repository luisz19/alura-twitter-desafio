import { useState } from "react"

const InputComponent = () => {

    const [texto, setTexto] = useState<string>('');
    const tamanho: number = 255;

    const HandleSubmit = (e: any) => {
        e.preventDefault()

        console.log(texto)
        setTexto('')
        
    }

    const textoRestante = tamanho - texto.length;

    return(

        <div className="w-[100vw] h-[100vh] bg-slate-100 px-[15rem] pt-[2rem]">
            <span className="text-gray-700">faça um x agora mesmo</span>
                <form onSubmit={HandleSubmit}>
                    <textarea className="px-3 pt-2 w-[100%] mt-3 rounded-lg h-[200px]" 
                    placeholder="o que pensas?" 
                    value={texto}
                    onChange={(e) => setTexto(e.target.value)}
                    maxLength={tamanho} />

                    <p>Restam {textoRestante} palavras restantes</p>
                    
                     <div className="w-[100%] flex justify-end"><button className="bg-blue-400 w-[100px] h-[40px] rounded-md mt-2 text-white">pensar</button></div>
                </form>
               
        </div>
                


    )
}

export default InputComponent