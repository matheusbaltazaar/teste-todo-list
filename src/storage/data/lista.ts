import { Lista } from "types/model";


const LISTS = "MY_LISTS";

function gerarId(): number {
    return Math.floor(Math.random() * 10000);
}


function getAllListas(): Lista[] {    
    const storedString = sessionStorage.getItem(LISTS);
    return storedString === null ? []:JSON.parse(storedString);
}

export function getAllListasByUsuarioId(idUsuario: number): Lista[] {
    return getAllListas().filter(l => l.usuarioId === idUsuario);
}

export function addNovaLista(lista: Lista) {
    lista.id = gerarId();
    
    const mListas = getAllListas();
    mListas.push(lista);
    sessionStorage.setItem(LISTS, JSON.stringify(mListas));
    
    console.log("Storage > Data > lista.ts : addNovaLista(Lista) | Lista adicionada! ", lista);
}

export function atualizarLista(lista: Lista) {
    const mListas = getAllListas();
    
    const index = mListas.findIndex(l => l.id === lista.id);

    mListas[index] = lista;

    sessionStorage.setItem(LISTS, JSON.stringify(mListas));
    
    console.log("Storage > Data > lista.ts : atualizarLista(Lista) | Lista atualizada! ", lista);
}


