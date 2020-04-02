import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { Animal } from '../../../models/animal';
import { User } from '../../../models/user';
import { AnimalService } from '../../../services/animal.service';
import { GLOBAL } from '../../../services/global';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  providers: [AnimalService]
})
export class AnimalDetailComponent implements OnInit {
  public animal: Animal;
  public user: User;
  public url: string;


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _animalService: AnimalService,
  ) {
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    console.log('Componente animal-detail cargado..!');
    this.getAnimal();
  }
  // Esta recogiendo los parametros de la URL con: 'this._route.params.forEach...'
  getAnimal() {
    this._route.params.forEach((params: Params) => {
      let id = params['id'];

      this._animalService.getAnimal(id).subscribe(
        response => {
          if (!response.animal) {
            this._router.navigate(['/home']);
          } else {
            this.animal = response.animal;
          }

        },
        error => {
          console.log(<any>error);
          this._router.navigate(['/home']);

        }
      );

    });
  }

}
