import { Usuario } from 'src/app/models/usuario.model';


import { createAction, props } from '@ngrx/store';

export const cargarUsuarios = createAction('[Usuarios] CargarUsuarios');

export const cargarUsuariosSuccess = createAction(
  '[Usuarios] CargarUariosSuccess',
  props<{ usuarios: Usuario[] }>()
);

export const cargarUsuariosError = createAction(
  '[Usuarios] CargarUariosError',
  props<{ payload: any }>()
);


