import { Usuario } from "./model";

export type Session = {
    logado: boolean;
    usuario?: Usuario;
}