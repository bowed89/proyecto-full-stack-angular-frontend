import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { Router} from '@angular/router';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [UserService],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  public title: string;
  public identity;
  public url: string;

  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
    this.title = 'NGZOO';
    this.url = GLOBAL.url;
  }

  ngOnInit() {
    this.identity = this._userService.getIdentity();
  }
  // DoCheck comprueba los cambios del localStorage y va refrescando la pagina ... 
  ngDoCheck() {
    this.identity = this._userService.getIdentity();
  }

  logout() {
    localStorage.clear();
    this.identity = null;
    this._router.navigate(['/']);
  }

}
