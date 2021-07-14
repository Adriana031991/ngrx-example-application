import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from './lista/lista.component';
import { UsuarioComponent } from './usuario/usuario.component';

import { HTTP_INTERCEPTORS } from '@angular/common/http';


@NgModule({
  declarations: [
    ListaComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ListaComponent,
    UsuarioComponent
  ],
  providers: [
  ],
})
export class UsuariosModule { }
