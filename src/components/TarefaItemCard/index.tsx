import { useState, useEffect } from 'react';
import { Tarefa } from 'types/model';
import { ReactComponent as CheckIcon } from 'assets/img/checked.svg'
import { ReactComponent as CloseIcon } from 'assets/img/close.svg'
import './styles.css'

type Props = {
    tarefa: Tarefa
}
function TarefaItemCard({ tarefa }: Props) {

    const [isChecked, setChecked] = useState<boolean>(tarefa.concluida ?? false)

    const handleCheckChange = () => {
        setChecked(!isChecked)

        tarefa.concluida = isChecked
        // PERSISTIR TAREFA
    }

    const handleDelete = () => {
        // DELETAR TAREFA
        alert("Deletei a tarefa!")
    }

    useEffect(() => {
        // Observar o estado isChecked
    }, [isChecked])


    const labelCheckStyle = () => {
        if (isChecked) {
            return "mt-2 todo-tarefa-card-label-checked"
        } else {
            return "mt-2 todo-tarefa-card-label"
        }
    }

    const buttonCheckStyle = () => {
        if (isChecked) {
            return "btn todo-tarefa-card-checkbutton-checked"
        } else {
            return "btn todo-tarefa-card-checkbutton"
        }
    }



    return (

        <div className="todo-tarefa-card-container">

            <div className="todo-tarefa-card-button-container">
                <button id={`${tarefa.id}`} className={buttonCheckStyle()}
                    onClick={() => handleCheckChange()}>
                    <CheckIcon />
                </button>
                <button className="btn todo-tarefa-card-button"
                    onClick={() => handleDelete()}>
                    <CloseIcon />
                </button>
            </div>

            <label htmlFor={`${tarefa.id}`} className={labelCheckStyle()}>Esta é uma tarefa.</label>

        </div >
    );
}

export default TarefaItemCard;