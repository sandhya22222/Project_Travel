import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private myHttp:HttpClient) { }

  getFlightsList(){
    return this.myHttp.get('http://localhost:4200/api/users/mytrips')
  }
}
