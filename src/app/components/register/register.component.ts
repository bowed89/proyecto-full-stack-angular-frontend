import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public title: string;
  public user: User;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService

  ) {
    this.title = 'Registro';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit(): void {
    console.log('register.component cargado!');
  }

  onSubmit() {
    this._userService.register(this.user).subscribe(
      response => {
        if (response.user) {
          this.status = 'success';
          this.user = new User('', '', '', '', '', 'ROLE_USER', '');
        } else {
          this.status = 'error';
        }
      },
      error => {
        console.log(<any>error);
      }
    );

  }

}
