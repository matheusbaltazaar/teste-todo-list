// usuario
export type Usuario = {
    id?:number,
    nome?:string,
    email?:string,
    senha?:string,
}

// categoria
export type Categoria = {
    id?:number,
    nome?:string,
}

// lista
export type Lista = {
    id:number,
    nome?:string,
    categoriaId?:number,
    concluida?:boolean,
    usuarioId: number
}

// tarefa
export type Tarefa = {
    id?:number,
    listaId:number,
    nome?:string,
    concluida:boolean,
    usuarioId:number
}
