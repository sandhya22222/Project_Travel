import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private myHttp:HttpClient) { }

  getProfiles(){
    return this.myHttp.get('http://localhost:4200/api/users')
  }

  getSignuplist(data:any){
    return this.myHttp.post('http://localhost:4200/api/users/signup',data)  
}
}
