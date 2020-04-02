import { Component, OnInit } from '@angular/core';
import { fadeIn } from '../animation';

import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';
import { GLOBAL } from '../../services/global';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  animations: [fadeIn],
  providers: [AnimalService]
})
export class AnimalsComponent implements OnInit {
  public title: string;
  // public animals = new Animal('','','', 2020 ,'', '');
  public animals: Animal[];
  public url;

  constructor(
    private _animalService: AnimalService
  ) {
    this.title = 'Animales';
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('Animals works!');
    this.getAnimals();
  }

  getAnimals() {
    this._animalService.getAnimals().subscribe(
      response => {
        this.animals = response.animals;
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
