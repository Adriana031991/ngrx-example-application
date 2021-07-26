import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: []
})
export class NavbarComponent  {

  constructor( private router: Router ) { }

  irUsuario(id: string): void {
  //   if (!id) {return;}
  //   this.router.navigate(['/usuario', id])

  id && this.router.navigate(['/usuario', id])
  }



}
