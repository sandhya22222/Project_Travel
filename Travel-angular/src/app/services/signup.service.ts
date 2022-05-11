import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // loginUser(value: any, value: any) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private myHttp:HttpClient) { }

  getProfiles(){
    return this.myHttp.get('http://localhost:4200/api/users')
  }


loginUser(email: string, password: string) {
  //rest api call to express
  let loginData = {
    email: email,
    password: password
  };

  return this.myHttp.post('api/users/login', loginData);
}

//flightclick


}
