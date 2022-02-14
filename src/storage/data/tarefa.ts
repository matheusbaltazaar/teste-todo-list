import { Tarefa } from "types/model";


const TASKS = "MY_TASKS"

function gerarId(): number {
    return Math.floor(Math.random() * 10000);
}

function getAllTarefas(): Tarefa[] {
    const tarefas = sessionStorage.getItem(TASKS);
    return tarefas === null ? [] : JSON.parse(tarefas)
}

export function getAllTarefasByUsuarioIdAndListaId(idLista: number, idUsuario: number): Tarefa[] {
    return getAllTarefas().filter(t => t.listaId === idLista && t.usuarioId === idUsuario)
}

export function addTarefa(tarefa: Tarefa) {
    const mTarefas = getAllTarefas();

    tarefa.id = gerarId();

    mTarefas.push(tarefa);
    sessionStorage.setItem(TASKS, JSON.stringify(mTarefas));

    console.log("Storage > Data > tarefa.ts : addTarefa(Tarefa) | Tarefa adicionada! ", tarefa);
}

export function atualizarTarefa(tarefa: Tarefa) {

    const mTarefas = getAllTarefas();

    const index = mTarefas.findIndex(t => t.id === tarefa.id);

    mTarefas[index] = tarefa;

    sessionStorage.setItem(TASKS, JSON.stringify(mTarefas));

    console.log("Storage > Data > tarefa.ts : atualizarTarefa(Tarefa) | Tarefa atualizada! ", tarefa);
}

export function excluirTarefa(tarefa: Tarefa) {
    const mTarefasAtualizadas = getAllTarefas()
    .filter(t => t.id !== tarefa.id);
    
    sessionStorage.setItem(TASKS, JSON.stringify(mTarefasAtualizadas))
    
    console.log("Storage > Data > tarefa.ts : excluirTarefa(Tarefa) | Tarefa excluida! ", tarefa);
}