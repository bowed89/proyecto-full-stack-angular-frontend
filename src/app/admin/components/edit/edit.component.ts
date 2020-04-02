import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params} from '@angular/router';

import { GLOBAL } from '../../../services/global';
import { Animal } from '../../../models/animal';
import { AnimalService } from '../../../services/animal.service';
import { UserService } from '../../../services/user.service';
import { UploadService } from '../../../services/upload.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  providers: [UserService, AnimalService, UploadService]
})
export class EditComponent implements OnInit {
  public title: string;
  public animal: Animal;
  public identity;
  public token;
  public url: string;
  public status: string;
  public is_edit;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _animalService: AnimalService,
    private _uploadService: UploadService
  ) {
    this.is_edit = true;
    this.title = 'Editar';
    this.animal = new Animal('', '', '', 2020, '', '');
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.url = GLOBAL.url;
  }

  ngOnInit(): void {
    this.getAnimal();
  }

  getAnimal() {
    // Esta recogiendo los parametros de la URL con: 'this._route.params.forEach...'
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

  onSubmit() {
    var id = this.animal._id;

    this._animalService.editAnimal(this.token, id, this.animal).subscribe(
      response => {
        if (!response.animal) {
          this.status = 'error';
        } else {
          this.status = 'success';
          this.animal = response.animal;

          // Subir imagen del animal
          if (!this.filesToUpload) {
            this._router.navigate(['/animal', this.animal._id]);
          } else {
            // Subida de la imagen
            this._uploadService.makeFileRequest(this.url + 'upload-image-animal/' + this.animal._id, [], this.filesToUpload, this.token, 'image')
              .then((result: any) => {
                this.animal.image = result.image;
                this._router.navigate(['/animal', this.animal._id]);
              });
          }
        }
      },
      error => {
        var errorMessage = <any>error;

        if (errorMessage != null) {
          this.status = 'error';
        }
      }
    );
  }

  public filesToUpload: Array<File>;
  filechangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
    console.log(this.filesToUpload);
  }


}
