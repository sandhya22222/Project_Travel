import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private myHttp: HttpClient) { }

  getFlightsList(email: string) {
    let queryOptions = {

      params: new HttpParams().set('email', email)

    };
    return this.myHttp.get('http://localhost:4200/api/users/flightclick', queryOptions)
  }

  getTrainsList(email: string) {
    let queryOptions = {

      params: new HttpParams().set('email', email)

    };
    return this.myHttp.get('http://localhost:4200/api/users/trainclick', queryOptions)
  }
}
