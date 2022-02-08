import { Usuario } from "types/model";



function gerarId(): number {
        
    return 0
}

export function getAllUsuarios(): Usuario[] {
    let storedUsers = sessionStorage.getItem("MY_USERS");
    return storedUsers === null ? [] : JSON.parse(storedUsers)
}

export function adicionarUsuario(usuario: Usuario) {
    usuario.id = gerarId()
    let users = getAllUsuarios()
    users.push(usuario)
    sessionStorage.setItem("MY_USERS", JSON.stringify(users))
}