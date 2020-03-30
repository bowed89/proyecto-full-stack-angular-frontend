import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-email',
  template: `
    <div class="bg-light d-inline-block p-4 mr-6">
      <h2>{{title}}</h2><hr>
      <app-mostrar-email></app-mostrar-email>
      <app-guardar-email></app-guardar-email>
    </div>

  `
})
export class MainEmailComponent implements OnInit {

  title = 'Módulo E-Mail';

  constructor() { }

  ngOnInit(): void {
    console.log('Componente Principal del Modulo Cargado');
  }

}
