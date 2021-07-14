import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root' // instancia de forma global los rrot
})
export class UsuarioService {

  private URL = 'https://jsonplaceholder.typicode.com';

  constructor( private http: HttpClient ) { }

  getUsers() {
    return this.http.get(`${this.URL}/posts`)
    .pipe(
      map( (resp:any)  => {
        // console.log(resp);
        return resp;
      })
    );
  };

  getUserById( id: string ) {
    console.log(id);
    return this.http.get(`${ this.URL }/posts/${ id }`)
          .pipe(
            map( (resp:any)  => resp)
          );
  }
}
