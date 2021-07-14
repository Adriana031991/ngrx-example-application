import { Usuario } from 'src/app/models/usuario.model';


import { createAction, props } from '@ngrx/store';

export const cargarUsuario = createAction(
  '[Usuarios] CargarUsuarios',
  props<{id: string }>()
  );

export const cargarUsuarioSuccess = createAction(
  '[Usuario] CargarUariosSuccess',
  props<{ usuario: Usuario }>()
);

export const cargarUsuarioError = createAction(
  '[Usuario] CargarUariosError',
  props<{ payload: any }>()
);

