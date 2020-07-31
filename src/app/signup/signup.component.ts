import { Component, OnInit } from '@angular/core';
import { SignupService } from '../signup.service';
import { Router } from '@angular/router';
import { UserModel } from '../signup/signup.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   title:String = "Signup";
  constructor(private signupService: SignupService,private router:Router) { }
  newUser = new UserModel(null,null,null);
  
  ngOnInit(): void {
  }
  AddUser()
  {
    this.signupService.newUser(this.newUser);
    console.log("Added new user");
    alert("Success");
    this.router.navigate(['/']);
  }
}
