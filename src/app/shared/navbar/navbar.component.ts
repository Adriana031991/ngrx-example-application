import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent  {

  constructor( private router: Router ) { }

  irUsuario(id: string): void {
  id && this.router.navigate(['/usuario', id])
  }



}
