import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { UsuarioService } from "src/app/services/usuario.service";
import * as usuariosActions from "../actions";

@Injectable() //decorador
export class UsuariosEffects {
//servicio
  constructor(
    private usuariosService: UsuarioService,
    private actions$: Actions
    //observable que esta escuchando  las acciones
  ) {}

  cargarUsuarios$ = createEffect(
    ()=> this.actions$.pipe( //callback del observable, que filtre por el .pipe
      ofType( usuariosActions.cargarUsuarios ), // ofType: especifico la accion que necesotp escuchar
      // tap( data => console.log('effect tap', data)), //tap: dispara efecto secundaro para poder ver que informacion trae el effect
      mergeMap( //el mergeMap permite disparar un nuevo observable y mezclarlo con el observable anterior
        () => this.usuariosService.getUsers()
        .pipe(
          // tap(data => console.log('getUsers effect', data))
          map( users => usuariosActions.cargarUsuariosSuccess({ usuarios: users }) ),
          catchError( err => of (usuariosActions.cargarUsuariosError( { payload:err })) )
        )
      )
      //el of crea un observable
      )
  );
}
