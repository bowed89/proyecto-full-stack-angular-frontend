import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import 'rxjs/add/operator/map';

@Injectable()

export class AnimalService {
  public url: string;
  public identity;
  public token;

  constructor(public http: HttpClient) {
    this.url = GLOBAL.url;
  }

  addAnimal(token, animal): Observable<any> {
    let params = JSON.stringify(animal);
    let headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': token
    });

    return this.http.post(this.url + 'animal', params, { headers: headers });
  }

  getAnimals(): Observable<any> {
    return this.http.get(this.url + 'animals');
  }

  getAnimal(id): Observable<any> {
    return this.http.get(this.url + 'animal/' + id);
  }

  editAnimal(token, id, animal): Observable<any> {
    let params = JSON.stringify(animal);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    return this.http.put(this.url + 'animal/' + id, params, {headers: headers});

  }

  deleteAnimal(token, id): Observable<any> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
    });
    // let option = ({ headers: headers });

    return this.http.delete(this.url + 'animal/' + id, {headers: headers});
  }
}
