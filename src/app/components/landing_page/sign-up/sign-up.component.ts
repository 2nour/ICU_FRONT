import { Component, OnInit } from '@angular/core';
import { VisitorService } from "./../../../services/visitor.service"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../models/User'
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import{ToastrService}from 'ngx-toastr'


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
  showLoding:Boolean=false;

  constructor(private vs: VisitorService,private title:Title, private signForm: FormBuilder, private router:Router,private socialAuthService: AuthService,private toast:ToastrService) {

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
    this.title.setTitle("Sign Up");
  }

  register() {

    let data = this.signUpform.value;
    const user = new User(data.username, data.email, data.password);
    this.showLoding=true;
    this.vs.register(user).subscribe((res) => {
      this.showLoding=false;
      this.router.navigate(['/'])
    }, (err) =>{
      this.showLoding=false;
      err.error.forEach(element => {
      this.toast.warning(element);
      });
      
    })



  }


  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook"){
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }else if(socialPlatform == "google"){
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.showLoding=true;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        this.showLoding=false;
        
        this.vs.socialSignIn(userData.token,socialPlatform).subscribe((res) => {
          
          localStorage.token =res.access_token;
          this.router.navigateByUrl("/home/feeds/0/0");
        }, (err) => {
            this.showLoding=false;
            console.log(err)
        } )
      }
    );
  }
}
