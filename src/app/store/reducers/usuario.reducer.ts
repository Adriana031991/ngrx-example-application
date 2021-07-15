

import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as actions from '../actions';

export interface UsuarioState {
    id: string,
    user: Usuario ,
    loaded: boolean,
    loading: boolean,
    error: any;
}

export const usuarioInitialState: UsuarioState = {
  id: '',
  user: {},
  loaded: false,
  loading: false,
  error: null
}

const _usuarioReducer = createReducer(usuarioInitialState,

    on(actions.cargarUsuario, (state, { id }) => ({
      ...state, loaded: true, id: id })),

    on(actions.cargarUsuarioSuccess, (state, { usuario }) => ({
      ...state,
      loading: false,
      loaded: true,
      user: { ...usuario }
      })),

    on(actions.cargarUsuarioError, (state, { payload }) => ({
      ...state,
      loading: false,
      loaded: false,
      error: {
        url: payload.URL,
        name: payload.name,
        message: payload.message
      }
      })),

);

export function usuarioReducer(state: UsuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}
