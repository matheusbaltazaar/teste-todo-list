import TarefaItemCard from "components/TarefaItemCard";
import "./styles.css"

type Props = {
    count: number;
}

function ListaCard({ count }: Props) {

    const tarefas = []
    for (let i = 0; i < count; i++) {
        tarefas.push(i)
    }

    return (

        <div className="todo-lista-card">
            <div className="todo-lista-card-header">
                <h4>Título Lista</h4>
            </div>


            <div className="todo-lista-card-tarefas">
                {
                    tarefas.map(c => { return (<TarefaItemCard tarefa={{}} />) })
                }
            </div>

            <div className="todo-lista-card-footer">
                <div className="divider" />
                <button className="btn btn-sm mt-2 todo-lista-card-button">Adicionar tarefa</button>
            </div>
        </div>

    );
}

export default ListaCard;