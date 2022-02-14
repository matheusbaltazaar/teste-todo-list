import TarefaItemCard from "components/TarefaItemCard";
import { useEffect, useState } from "react";
import { addTarefa, getAllTarefasByUsuarioIdAndListaId } from "storage/data/tarefa";
import { Lista, Tarefa } from "types/model";
import "./styles.css"

type Props = {
    listaDeTarefas: Lista
}

function ListaCard({ listaDeTarefas }: Props) {

    const tarefas = getAllTarefasByUsuarioIdAndListaId(listaDeTarefas.id!!, listaDeTarefas.usuarioId)


    const [isCreatingMode, setCreatingMode] = useState(false);

    const toggleCardNovaTarefa = () => {
        if (isCreatingMode) {
            return "todo-lista-form-card-nova-tarefa-show"
        }
        else {
            return "todo-lista-form-card-nova-tarefa-hide"
        }
    }

    const handleCriarTarefa = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const novatarefa = (event.target as any).novaTarefa.value;

        console.log("ListaCard > index.tsx : handleCriarTarefa | ", novatarefa);

        const tarefa: Tarefa = {
            concluida: false,
            listaId: listaDeTarefas.id,
            nome: novatarefa,
            usuarioId: listaDeTarefas.usuarioId
        }

        addTarefa(tarefa);
        setCreatingMode(false);
        (event.target as any).reset();

        console.log("ListaCard > index.tsx : handleCriarTarefa | Tarefa Criada!");
    }

    return (

        <div className="todo-lista-card">
            <div className="todo-lista-card-header">
                <h4>{listaDeTarefas.nome}</h4>
            </div>


            <div className="todo-lista-card-tarefas">
                {
                    tarefas.map(t => {
                        return (<TarefaItemCard key={t.id} tarefa={t} />)
                    })
                }

                {/* CARD TEMPLATE PARA CRIAÇÃO DA NOVA TAREFA*/}
                <form className={toggleCardNovaTarefa()} onSubmit={handleCriarTarefa}>
                    <div className="todo-lista-card-nova-tarefa">

                        <textarea required={true} id="novaTarefa" cols={40} rows={2}
                            placeholder="Descreva a tarefa..."
                            className="form-control" />

                        <div className="mt-2 todo-lista-card-nova-tarefa-button-group">
                            <button className="btn btn-sm todo-lista-card-button">Criar</button>
                            <button type="reset"
                                onClick={() => { setCreatingMode(false) }}
                                className="btn btn-sm"><i className="fa-solid fa-close" /></button>
                        </div>

                    </div>
                </form>

            </div>

            <div className="todo-lista-card-footer">
                <button onClick={() => { setCreatingMode(true) }}
                    className="btn mt-2 todo-lista-card-button"
                    disabled={isCreatingMode}>Adicionar Tarefa</button>
            </div>
        </div>

    );
}

export default ListaCard;