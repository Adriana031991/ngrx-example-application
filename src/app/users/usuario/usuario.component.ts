import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';
import { cargarUsuario } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario | null = new Usuario(); /////preguntar por esta razon :c


  constructor(
    private router: ActivatedRoute,
    private store: Store<AppState>
  ) { }

  ngOnInit(): void {

    this.store.select('usuario').subscribe( ({ user, loading, error }) => {
      // console.log(user)
      this.usuario = user;
      console.log ( this.usuario)
    });


    this.router.params.subscribe( ({ id }) => {

      this.store.dispatch( cargarUsuario({ id }) );

    });

  }

}
