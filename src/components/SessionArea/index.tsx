import { Session } from "types/session";
import { ReactComponent as Avatar } from 'assets/img/circular-avatar.svg'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'


type Props = {
    session: Session;
    onChangeSession: Function;
}

function SessionArea({ session, onChangeSession }: Props) {
    const navigate = useNavigate()

    function logout() {
        onChangeSession({ logado: false })
        navigate("/");
    }

    if (!session.logado) {

        return (
            <div className="todo-navigationbar-session">

                <a href="/login" rel="noreferrer">Log In</a>
                |
                <a href="/signup" rel="noreferrer">Cadastre-se</a>
            </div>
        );

    } else {

        return (
            <div className="todo-navigationbar-session">
                <Avatar />
                <p>{session.usuario?.nome}</p>
                |
                <Link to={`/login`}>
                    <button className="btn btn-primary"
                        onClick={() => logout()}>
                        Sair
                    </button>
                </Link>
            </div>
        );
        
    }
}

export default SessionArea;