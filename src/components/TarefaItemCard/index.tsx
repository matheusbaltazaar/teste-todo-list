import { useState } from 'react';
import { atualizarTarefa, excluirTarefa } from 'storage/data/tarefa';
import { Tarefa } from 'types/model';
import './styles.css'

type Props = {
    tarefa: Tarefa
}

function TarefaItemCard({ tarefa }: Props) {

    const [isChecked, setChecked] = useState<boolean>(tarefa.concluida)

    const handleCheckChange = () => {

        tarefa.concluida = !tarefa.concluida
        atualizarTarefa(tarefa)

        setChecked(tarefa.concluida)
    }

    const handleDelete = () => {
        excluirTarefa(tarefa)
    }

    const labelCheckStyle = () => {
        if (isChecked) {
            return "mt-2 todo-tarefa-card-label-checked"
        } else {
            return "mt-2 todo-tarefa-card-label"
        }
    }

    const buttonCheckStyle = () => {
        if (isChecked) {
            return "btn button-check"
        } else {
            return "btn button-check-outline"
        }
    }



    return (
        <form>
            <div className="todo-tarefa-card-container">


                <label onClick={() => handleCheckChange()} className={labelCheckStyle()}>
                    <button type="button" className={buttonCheckStyle()}
                        onClick={() => handleCheckChange()}><i className="fa-solid fa-check" /></button>
                    &nbsp;&nbsp;{tarefa.nome}
                </label>

                <button type="submit" className="btn button-check"
                    onClick={() => handleDelete()}>
                    <i className="fa-solid fa-trash" />
                </button>

            </div >
        </form>
    );
}

export default TarefaItemCard;