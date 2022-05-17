import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormArrayName } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SignupService {


  constructor(private myHttp: HttpClient) { }

  getProfiles() {
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

}
