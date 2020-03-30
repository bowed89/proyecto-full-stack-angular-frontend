import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-mostrar-email',
  template: `
    <div *ngIf="emailContacto"><strong>E-mail de Contacto:</strong> {{emailContacto}}
      <h4>{{title}}</h4>
      <button (click)="borrarEmail()">Eliminar E-mail de Contacto</button>
    </div>
  `
})
export class MostrarEmailComponent implements OnInit, DoCheck {

  title = 'Mostrar Email';
  emailContacto: string;

  ngOnInit(): void {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  ngDoCheck() {
    this.emailContacto = localStorage.getItem('emailContacto');
  }

  borrarEmail() {
    localStorage.removeItem('emailContacto');
    localStorage.clear();
    this.emailContacto = null;
  }

}
