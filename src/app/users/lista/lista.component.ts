import { UsuarioService } from './../../services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { AppState } from 'src/app/store/app.reducers';
import { Store } from '@ngrx/store';
import { cargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean = false;
  error: any;


  constructor( private store: Store<AppState>,
    // public usuarioService: UsuarioService
    ) { }

  ngOnInit() {


    this.loading = true;
    setTimeout(() => {
      this.store.select( 'usuarios' ).subscribe( ({users, loading, error}) => {
        // console.log (this.loading);
        this.usuarios = users;
        this.loading = loading;
        this.error = error;
      });

      this.store.dispatch( cargarUsuarios() );
    }, 1000)




    // this.usuarioService.getUsers()
    // .subscribe( data => {
    //   console.log(data);
    //   this.users = data;
    // });
  }




}
