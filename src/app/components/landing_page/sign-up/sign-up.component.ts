import { Component, OnInit } from '@angular/core';
import { VisitorService } from "./../../../services/visitor.service"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../models/User'
import { Router } from '@angular/router';

import { visitAll } from '@angular/compiler/src/render3/r3_ast';


import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpform: FormGroup;


  constructor(private vs: VisitorService, private signForm: FormBuilder, private router:Router,private socialAuthService: AuthService) {

    this.signUpform = signForm.group({
      username: new FormControl("", [
      Validators.required,
      Validators.minLength(2)]),
      email: new FormControl("", [
        Validators.required,
          Validators.email
      ]),
      password: new FormControl("", [
        Validators.required,
          Validators.minLength(6)
      ])

    });



  }



  get username() {
    return this.signUpform.get('username');
  }

  get email() {
    return this.signUpform.get('email');
  }

  get password() {
    return this.signUpform.get('password');
  }

  ngOnInit() {
  }

  register() {

    let data = this.signUpform.value;
    const user = new User(data.username, data.email, data.password);
    console.log(user);
    this.vs.register(user).subscribe((res) => {
      console.log(res);
    }, (err) => console.log(err))



  }


  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        
        this.vs.socialSignIn(userData.token,socialPlatform).subscribe((res) => {
          console.log("connecte");
          localStorage.token =res.token;
          this.router.navigateByUrl("/home-profile");
        }, (err) => console.log(err))
      }
    );
  }
}
