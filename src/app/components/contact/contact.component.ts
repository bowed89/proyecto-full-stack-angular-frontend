import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  animations: [fadeIn]
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  emailContacto: string;
  constructor() { }

  ngOnInit(): void {
    console.log('Contact works!');

  }
  guardarEmail() {
    localStorage.setItem('emailContacto', this.emailContacto);
  }

}
