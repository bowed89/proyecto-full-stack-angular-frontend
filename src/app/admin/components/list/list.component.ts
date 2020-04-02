import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  providers: [AnimalService]

})
export class ListComponent implements OnInit {
  public title: string;
  public animals: Animal[];
  numbers = new Array(6);
  public token;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
    private _userService: UserService
  ) {
    this.title = 'Listado de animales';
    this.token = _userService.getToken();
  }

  ngOnInit(): void {
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

  deleteAnimal(id) {
    this._animalService.deleteAnimal(this.token, id).subscribe(
      response => {
        if (!response.animal) {
          alert('Error en el Servidor');
        }
        this.getAnimals();

      },
      error => {
        alert('Error en el Servidor');
      }

    );
  }

}
