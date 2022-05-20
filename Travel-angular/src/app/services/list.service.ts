import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// const baseUrl = 'http://localhost:4200/api/users/mytrips/:email';


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

  getBusesList(email: string) {
    let queryOptions = {

      params: new HttpParams().set('email', email)

    };
    return this.myHttp.get('http://localhost:4200/api/users/busclick', queryOptions)
  }

  getHotelList(email: string) {
    let queryOptions = {

      params: new HttpParams().set('email', email)

    };
    return this.myHttp.get('http://localhost:4200/api/users/hotelclick', queryOptions)
  }

  getCabList(email: string) {
    let queryOptions = {

      params: new HttpParams().set('email', email)

    };
    return this.myHttp.get('http://localhost:4200/api/users/cabclick', queryOptions)
  }


  deleteUser(userid:any) {
    return this.myHttp.delete(`api/users/mytrips/${userid}`);
  };

}
