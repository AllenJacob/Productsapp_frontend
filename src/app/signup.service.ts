import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private http:HttpClient) { }
  newUser(user)
  {
    return this.http.post("http://localhost:3000/signup",{"signup":user})
    .subscribe(data =>{console.log(data)})
  }
  loginUser(email,password){
    return this.http.post("http://localhost:3000/login",{"email":email,"password":password})
  }
}
