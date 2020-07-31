import { Component, OnInit } from '@angular/core';
import { UserModel } from '../signup/signup.model';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { SignupService } from '../signup.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  title:String="login"
  email=""
  password=""
  showerr:boolean=false;
  
  constructor(private signupservice:SignupService,private router:Router) {}

  ngOnInit(): void {
  }

  login(){
    this.signupservice.loginUser(this.email,this.password).subscribe(res=>{
      localStorage.setItem('token',res['token'])
      this.router.navigate(['/'])
    }),
    err=>{
      alert("You  have not registered ")
      this.router.navigate(['/signup'])
    }
  }
  

}
