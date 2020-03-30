import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guardar-email',
  template: `
  <h4>{{title}}</h4>
  <input type="text" [(ngModel)]="emailContacto">
  <button (click)="guardarEmail()">Guardar Email</button>`
})
export class GuardarEmailComponent implements OnInit {

  title = 'Guardar Email';
  emailContacto: string;

  constructor() { }

  ngOnInit(): void {
  }

  guardarEmail() {
    if (this.emailContacto !== undefined && this.emailContacto !== '') {
      localStorage.setItem('emailContacto', this.emailContacto);
    }
  }

}
