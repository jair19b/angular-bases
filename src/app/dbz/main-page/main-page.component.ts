import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.iterface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Maestro Rosshi',
    poder: 500,
  };

  constructor() {}
}
