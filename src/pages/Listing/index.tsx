import { Usuario } from "types/model";

type Props = {
    usuario: Usuario;
}

function Listing({ usuario }: Props) {
    return (
        <h1>Listagem Das Tarefas</h1>
    );
}

export default Listing;