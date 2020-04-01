import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  public title: string;
  public user: User;
  public identity;
  public token;
  public status: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'Identifícate';
    this.user = new User('', '', '', '', '', 'ROLE_USER', '');
   }

  ngOnInit(): void {
    console.log('login.component cargado!');
    console.log(this._userService.getIdentity());
    console.log(this._userService.getToken());

  }

  onSubmit() {
    // Loguear al usuario y conseguir el objeto
    this._userService.signup(this.user).subscribe(
        response => {
          this.identity = response.user;

          if (!this.identity || !this.identity._id) {
            alert('El usuario no se ha logueado correctamente!');
          } else {
            // this.identity.password = '';
            // Se almacena los datos del identity en el navegador con localStorage
            localStorage.setItem('identity', JSON.stringify(this.identity));

              // Se consigue el Token
            this._userService.signup(this.user, 'true').subscribe(
                response => {
                  this.token = response.token;
                  if (this.token.length <= 0) {
                    alert('El Token no se ha generado!');
                  } else {
                    // Se almacena los datos del token en el navegador con localStorage
                    localStorage.setItem('token', this.token);
                    this.status = 'success';
                    // Luego que el localStorage tenga el token nos redirecciona al menu principal
                    this._router.navigate(['/']);
                  }
                },
                error => {
                  console.log(error as any);
                }
              );
          }
        },
        error => {
          var errorMessage = <any>error;
          this.status = 'error';

        }
      );
  }

}
