import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { getAllUsuarios } from "storage/data/usuario";
import { Session } from "types/session";
import { validateEmail } from "utils/validation";
import "./styles.css";

type Props = {
    session: Session;
    onChangeSession: Function;
}

function LogIn({ onChangeSession, session }: Props) {

    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const senha = (event.target as any).senha.value;

        if ((email as string).length === 0 || (senha as string).length === 0) {
            console.log("Login > index.tsx : handleSubmit | Campos não preenchidos ")
            setMensagem("*Campos não preenchidos")
            return; // CAMPOS NÃO PREENCHIDOS
        }

        if (!validateEmail(email)) {
            console.log("Login > index.tsx : handleSubmit | Email inválido ", email)
            setMensagem("*Email inválido")
            return; // EMAIL INVÁLIDO
        }

        let users = getAllUsuarios()

        
        if (!users.some(user => user.email === email)) {
            console.log("Login > index.tsx : handleSubmit | Usuário não existe");
            setMensagem("*O usuário não existe")
            return; // USUÁRIO NÃO EXISTE
        }
        
        let usuario = users.find(u => u.email === email)
        if (usuario?.senha !== senha) {
            console.log("Login > index.tsx : handleSubmit | Senha incorreta ");
            setMensagem("*A senha está incorreta")
            return; // SENHA INCORRETA
        }

        // TUDO CORRETO NESTE PONTO
        
        //LOGAR O USUÁRIO ENCONTRADO
        onChangeSession({ logado: true, usuario: usuario })
        navigate("/");
    }
    
    useEffect(() =>{
        if (session.logado) {
            navigate("/");
        }
    })

    return (
        <div className="container todo-login-container">

            <div className="todo-login-card">
                <h2 className="mt-4">Login</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" className="form-control" />
                    </div>

                    <button type="submit" className="btn mt-2" value="Entrar">Entrar</button>

                </form>

                <label className="todo-login-card-msg">{mensagem}</label>
            </div>
        </div>
    );
}

export default LogIn;