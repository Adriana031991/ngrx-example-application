

import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as actions from '../actions';

export interface usuarioState {
    id: string,
    user: Usuario ,
    loaded: boolean,
    loading: boolean,
    error: any;
}

export const usuarioInitialState: usuarioState = {
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

export function usuarioReducer(state: usuarioState | undefined, action: Action) {
    return _usuarioReducer(state, action);
}
