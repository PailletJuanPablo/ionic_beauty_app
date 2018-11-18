import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PropuestasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PropuestasProvider {
  constructor(public http: HttpClient) {
    console.log('Hello PropuestasProvider Provider');
  }

  getPropuestas() {
    return new Promise((resolve, reject) => {
      this.http
        .get('http://psiquevamos.com.ar/wp-json/wp/v2/posts')
        .toPromise()
        .then(propuestas => {
          resolve(propuestas);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
}
