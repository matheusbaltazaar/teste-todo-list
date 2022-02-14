import { Lista, Usuario } from "types/model";
import { Plock } from "react-plock";
import './styles.css'
import ListaCard from "components/ListaCard";
import { addNovaLista, getAllListasByUsuarioId } from "storage/data/lista";
import { useState } from "react";

type Props = {
    usuario: Usuario;
}

function Listing({ usuario }: Props) {

    const containerPadding = 16; // 
    const layoutConfig = [ // A partir do size X (px), use Y colunas
        { size: 0, columns: 1 },
        { size: 576 - (containerPadding * 2), columns: 2 },
        { size: 720 - (containerPadding * 2), columns: 2 },
        { size: 992 - (containerPadding * 2), columns: 3 },
        { size: 1320 - (containerPadding * 2), columns: 4 },
    ];


    const [isListCreating, setListCreating] = useState(false)

    const listaDeTarefas = getAllListasByUsuarioId(usuario.id!!);

    const toggleCardNovaLista = () => {
        return isListCreating ? "todo-listing-form-card-nova-lista-show"
            : "todo-listing-form-card-nova-lista-hide"
    }

    const handleCriarLista = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const nomeLista = (event.target as any).nomelista.value

        const novaLista: Lista = {
            id: 0,
            usuarioId: usuario.id!!,
            nome: nomeLista,
            concluida: false,
        }

        addNovaLista(novaLista);
        setListCreating(false);
        (event.target as any).reset();

        console.log("Listing > index.tsx : handleCriarLista | Lista criada!");
    }



    return (
        <div className="todo-listing-container">

            <div className="todo-listing-header">
                <p>Minhas tarefas</p>

                <button disabled={isListCreating} className="btn btn-secondary todo-listing-button" onClick={() => setListCreating(true)}>
                    <i className="fa-solid fa-plus" />&nbsp;&nbsp;Adicionar Lista
                </button>
            </div>


            <div style={{ padding: containerPadding }}>
                <Plock gap={20} nColumns={layoutConfig}>
                    {
                        listaDeTarefas.map(lista => {
                            return (
                                <ListaCard key={lista.id} listaDeTarefas={lista} />
                            )
                        })
                    }

                    <form className={toggleCardNovaLista()} onSubmit={handleCriarLista}>
                        <div className="todo-lista-card">


                            <div className="todo-lista-card-header">
                                <input type="text" id="nomelista" required={true} className="form-control" />
                            </div>


                            <div className="mt-2 todo-lista-card-footer">
                                <button className="btn btn-sm todo-lista-card-button">Adicionar</button>
                                <button type="reset" onClick={() => { setListCreating(false) }}
                                    className="btn btn-sm"><i className="fa-solid fa-close" /></button>
                            </div>

                        </div>
                    </form>
                </Plock>
            </div>

        </div>
    );
}

export default Listing;