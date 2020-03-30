import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-parques',
  templateUrl: './parques.component.html',
})
export class ParquesComponent implements OnChanges {

  @Input() nombre: string;
  @Input('metros_cuadrados') metros: number;
  public vegetacion: string;
  public abierto: boolean;

  @Output() pasameLosDatos = new EventEmitter();

  constructor() {
      this.nombre = 'Parque natural para caballos';
      this.metros = 450;
      this.vegetacion = 'Alta';
      this.abierto = false;
   }

   ngOnChanges(changes: SimpleChanges) {
      // console.log(changes);
      console.log('Existen Cambios!');
   }

   ngOnInit() {
      console.log('Metodo onInit lanzado!');
   }

   emitirEvento() {
     this.pasameLosDatos.emit({
          'nombre': this.nombre,
          'metros': this.metros,
          'vegetacion': this.vegetacion,
          'abierto': this.abierto
     });
  }




}
