import { Usuario } from "types/model";
import { Plock } from "react-plock";
import './styles.css'
import ListaCard from "components/ListaCard";

type Props = {
    usuario: Usuario;
}

function Listing({ usuario }: Props) {

    const count = 10
    const listaDeTarefas = []
    for (let i = 0; i < count; i++) {
        listaDeTarefas.push(i)
    }

    const containerPadding = 16; // 
    const layoutConfig = [ // A partir do size X (px), use Y colunas
        { size: 0, columns: 1 },
        { size: 576 - (containerPadding * 2), columns: 2 },
        { size: 720 - (containerPadding * 2), columns: 2 },
        { size: 992 - (containerPadding * 2), columns: 3 },
        { size: 1320 - (containerPadding * 2), columns: 4 },
    ];

    return (
        <div className="todo-listing-container">

            <div className="todo-listing-header">
                <p>Minhas tarefas</p>

                <button className="btn btn-secondary todo-listing-button" onClick={() => alert("cliquei aqui")}>
                    <i className="fa-solid fa-plus" />&nbsp;&nbsp;Adicionar Lista
                </button>
            </div>


            <div style={{ padding: containerPadding }}>
                <Plock gap={20} nColumns={layoutConfig}>
                    { /* MAPPING DAS LISTAS EXISTENTES 
                        listaDeTarefas.map(i => {
                            return (
                                <ListaCard count={3} />
                            )
                        })
                        */
                    }

                    <ListaCard count={1} />
                    <ListaCard count={3} />
                    <ListaCard count={8} />

                    <ListaCard count={3} />
                    <ListaCard count={5} />
                    <ListaCard count={1} />
                </Plock>
            </div>

        </div>
    );
}

export default Listing;