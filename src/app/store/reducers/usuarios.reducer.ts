

import { Action, createReducer, on } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import * as actions from '../actions';

export interface usuariosState {
    users: Usuario[],
    loaded: boolean,
    loading: boolean,
    error: any;
}

export const usuariosInitialState: usuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null
}

const _usuariosReducer = createReducer(usuariosInitialState,

    on(actions.cargarUsuarios, state => ({ ...state, loaded: true })),

    on(actions.cargarUsuariosSuccess, (state, { usuarios }) => ({
      ...state,
      loading: false,
      loaded: true,
      users: [ ...usuarios ]
      })),

    on(actions.cargarUsuariosError, (state, { payload }) => ({
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

export function usuariosReducer(state: usuariosState | undefined, action: Action) {
    return _usuariosReducer(state, action);
}
