import { Session } from "types/session"

const initialSession : Session = { logado: false }

export function getCurrentSession(): Session {
    let storedSession = sessionStorage.getItem("MY_SESSION_STATE");
    return storedSession === null ? initialSession : JSON.parse(storedSession)
}

export function setCurrentSession(sessao: Session) {
    sessionStorage.setItem("MY_SESSION_STATE", JSON.stringify(sessao))
}
