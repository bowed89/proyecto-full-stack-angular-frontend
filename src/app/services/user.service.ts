import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
  public url: string;

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }

  register(user_to_register): Observable<any> {
    let params = JSON.stringify(user_to_register);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post(this.url + 'register', params, { headers: headers });
  }

  signup(user_to_login, gettoken = null): Observable<any> {

    if (gettoken != null) {
      user_to_login.gettoken = gettoken;
    }
    let params = JSON.stringify(user_to_login);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});

    return this.http.post(this.url + 'login', params, { headers: headers });
  }

}
