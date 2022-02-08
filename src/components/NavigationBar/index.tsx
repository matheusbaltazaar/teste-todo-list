import { ReactComponent as Tarefa } from "assets/img/task.svg";
import SessionArea from "components/SessionArea";
import { Session } from 'types/session';
import './styles.css';

type Props = {
    session: Session;
    onChangeSession: Function;
}

function NavigationBar({ session, onChangeSession }: Props) {

    return (
        <header className="todo-navigationbar-header">
            <div className="container">

                <div className="todo-navigationbar-container">

                    <div className="todo-navigationbar-title">
                        <Tarefa />
                        <p>To Do - Tarefas</p>
                    </div>

                    <SessionArea session={session} onChangeSession={onChangeSession} />

                </div>
            </div>
        </header>
    );
}

export default NavigationBar;


