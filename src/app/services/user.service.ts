import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';

@Injectable()

export class UserService {
  public url: string;
  public identity;
  public token;

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

  getIdentity() {
    const indentity = JSON.parse(localStorage.getItem('identity'));

    if (indentity !== 'undefined') {
      this.identity = indentity;
    } else {
      this.identity = null;
    }
    return this.identity;
  }

  getToken() {
    const token = localStorage.getItem('token');

    if (token !== 'undefined') {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }

  updateUser(user_to_update): Observable<any> {

    let params = JSON.stringify(user_to_update);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.getToken()
    });

    return this.http.put(this.url + 'update-user/' + user_to_update._id, params, { headers: headers });

  }

}
