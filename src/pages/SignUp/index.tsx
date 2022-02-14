import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllUsuarios, adicionarUsuario } from "storage/data/usuario";
import { Usuario } from "types/model";
import { Session } from "types/session";
import { validateEmail } from "utils/validation";
import "./styles.css"

type Props = {
    session: Session;
}

function SignUp({ session }: Props) {

    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate()

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const nome = (event.target as any).nome.value;
        const email = (event.target as any).email.value;
        const senha = (event.target as any).senha.value;

        if ((nome as string).trim().length === 0
            || (email as string).trim().length === 0
            || (senha as string).trim().length === 0) {
            console.log("Cadastro > index.tsx : handleSubmit | Campos não preenchidos ")
            setMensagem("*Campos não preenchidos/inválidos")
            return; // CAMPOS NÃO PREENCHIDOS
        }

        if (!validateEmail(email)) {
            console.log("Cadastro > index.tsx : handleSubmit | Email inválido ", email)
            setMensagem("*Email inválido")
            return; // EMAIL INVÁLIDO
        }

        if ((senha as string).length < 8) {
            console.log("Cadastro > index.tsx : handleSubmit | Senha curta ", email)
            setMensagem("*Senha deve ter mais de 8 caracteres")
            return; // SENHA CURTA
        }


        let users = getAllUsuarios()

        if (users.some(u => u.email === email)) {
            console.log("Cadastro > index.tsx : handleSubmit | Usuário já existe ", email)
            setMensagem("*O usuário já existe")
            return; // USUÁRIO JÁ EXISTE
        }

        // CRIAR O USUÁRIO
        let novoUsuario: Usuario = {}
        novoUsuario.nome = nome
        novoUsuario.email = email
        novoUsuario.senha = senha

        adicionarUsuario(novoUsuario);
        alert("Tudo certo! Novo usuário cadastrado =)")

        navigate("/")
    }

    useEffect(() => {
        if (session.logado) {
            navigate("/");
        }
    })

    return (
        <div className="container todo-signup-container">

            <div className="todo-signup-card">
                <h2 className="mt-4">Cadastrar</h2>

                <form onSubmit={handleSubmit}>
                    <div className="form-group mt-3">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" id="nome" maxLength={50} className="form-control" />
                    </div>
                    <div className="form-group mb-3 mt-3">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" maxLength={60} className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" maxLength={20} className="form-control" />
                        <p className="todo-signup-input-helper-text">*Mínimo 8 dígitos</p>
                    </div>

                    <button type="submit" className="btn mt-2">Salvar</button>
                </form>

                <label className="todo-login-card-msg">{mensagem}</label>
            </div>
        </div>
    );
}

export default SignUp;

