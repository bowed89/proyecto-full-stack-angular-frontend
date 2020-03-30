import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { fadeIn } from '../animation';

declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css'],
  animations: [
    trigger('marcar', [
      state('inactive', style({
        border: '5px solid #ccc'
      })),
      state('active', style({
        border: '5px solid yellow',
        background: 'red',
        borderRadius: '50px',
        transform: 'scale(1.2)'
      })),
      transition('inactive => active', animate('300ms linear')),
      transition('active => inactive', animate('300ms linear'))

    ]),
    [fadeIn]
  ]
})
export class TiendaComponent implements OnInit {

  public titulo;
  public nombreDelParque: string;
  public textoArea: string;
  public miParque;
  status = 'inactive';

  constructor() {
    this.titulo = 'Esta es la tienda';
   }
   mostrarNombre() {
     console.log(this.nombreDelParque);
   }
   verDatosParque(event) {
     console.log(event);
     this.miParque = event;
   }

   textoRichEditor(content) {
     console.log(content);
     this.textoArea = content;
   }

   cambiarEstado() {
     if (this.status === 'inactive') {
        this.status = 'active';
     } else {
      this.status = 'inactive';
     }
   }

  ngOnInit() {
    $('#textojq').hide();
    $('#botonjq').click(function() {
      $('#textojq').slideToggle();
    });
    $('#caja').dotdotdot({});
  }

}
