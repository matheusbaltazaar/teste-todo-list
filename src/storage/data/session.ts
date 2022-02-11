import { Session } from "types/session"

const initialSession : Session = { logado: false }

const SESSION = "MY_SESSION_STATE"

export function getCurrentSession(): Session {
    let storedSession = sessionStorage.getItem(SESSION);
    return storedSession === null ? initialSession : JSON.parse(storedSession)
}

export function setCurrentSession(sessao: Session) {
    sessionStorage.setItem(SESSION, JSON.stringify(sessao))
}
