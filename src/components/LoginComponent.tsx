import { Link } from "react-router-dom"
import { useState } from "react";

const LoginComponent = () => {

    // interface LoginData {
    //     email: string;
    //     senha: string;
    // }

    const [email, setEmail] = useState<string>('');
    const [senha, setSenha] = useState<string>('');

    const HandleSubmit = (e: any) => {
        e.preventDefault();

        console.log(email, senha);
        setEmail('')
        setSenha('')
    }




    

    return (
        <div className="">
            <h1 className="font-semibold size text-[2rem] text-center p-2 text-blue-500">Twitter</h1>
            <form className="flex flex-col gap-4" onSubmit={HandleSubmit}>
                <input className="border-2 p-2 w-[300px]" type="email" 
                placeholder="user@mail.com" 
                value={email} 
                required={true}
                minLength={5}
                onChange={(e) => setEmail(e.target.value)}/>

                <input className="border-2 p-2 w-[300px]" 
                type="password"
                placeholder="Senha" 
                value={senha} 
                required={true}
                minLength={8}
                onChange={(e) => setSenha(e.target.value)} />

                <button className= "bg-blue-600 text-white p-2 rounded-lg">Entrar</button>
            
                
            </form>

            <span className="text-center text-[0.8rem] pt-1">Ainda não tem uma conta? <Link className="text-blue-500 cursor-pointer" to="/signup">Crie uma!</Link>
            </span>
        </div>
    )
}

export default LoginComponent