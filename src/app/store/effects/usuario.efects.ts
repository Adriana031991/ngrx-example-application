import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions";

@Injectable() //decorador
export class UsuarioEffects {
//servicio
  constructor(
    private usuarioService: UsuarioService,
    private actions$: Actions
    //observable que esta escuchando  las acciones
  ) {}

  cargarUsuario$ = createEffect(
    () => this.actions$.pipe(
        ofType( usuariosActions.cargarUsuario ),
        mergeMap(
            ( {id}) => this.usuarioService.getUserById( id )
                .pipe(
                    map( user => usuariosActions.cargarUsuarioSuccess({ usuario: user }) ),
                    catchError( err => of(usuariosActions.cargarUsuarioError({ payload: err })) )
                )
        )
    )
  );
}
