import { Usuario } from "types/model";

const USERS = "MY_USERS"

function gerarId(): number {
    return Math.floor(Math.random() * 100);
}

export function getAllUsuarios(): Usuario[] {
    let storedUsers = sessionStorage.getItem(USERS);
    return storedUsers === null ? [] : JSON.parse(storedUsers)
}

export function adicionarUsuario(usuario: Usuario) {
    usuario.id = gerarId()
    let users = getAllUsuarios()
    users.push(usuario)
    sessionStorage.setItem(USERS, JSON.stringify(users))
}