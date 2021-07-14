import { UsuariosEffects } from "./usuarios.effects";
import { UsuarioEffects } from "./usuario.efects";

export const EffectsArray: any[] = [ UsuariosEffects, UsuarioEffects ]
//conf de los efectos
//es de tipo any porque quiere recibir varios tipos de efectos
