import { Component, OnInit } from '@angular/core';
import { MemberService } from "./../../../services/member.service"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../models/User';
import { Router } from '@angular/router';
import { Title }     from '@angular/platform-browser';
import { ToastrService } from 'ngx-toastr';

import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';
import { VisitorService } from 'src/app/services/visitor.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
  '../../../../../node_modules/ngx-toastr/toastr.css'
  ]
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;
  showLoding:Boolean=false;


  constructor(private ms:MemberService,private vs:VisitorService,private socialAuthService: AuthService,private title:Title, private signForm: FormBuilder, private router:Router,private toastrService:ToastrService) {

    this.loginform = signForm.group({
      username: new FormControl("", [
       
      ]),
      email : new FormControl("",[
       
      ]),
      password : new FormControl("",[
        Validators.required,
          Validators.minLength(6)
      ])

    });



  }


  
  get username() {
    return this.loginform.get('username');
  }

  get email() {
    return this.loginform.get('email');
  }

  get password() {
    return this.loginform.get('password');
  }

  ngOnInit() {

    this.title.setTitle("Login");
  }

 async login() {
    
    let data = this.loginform.value;

    const user = new User(data.username, data.email, data.password);

    this.showLoding=true;

   await this.ms.login(user).toPromise().then(async (res) => {
     
      localStorage.token =res.TokenAuth;
      await this.ms.getUser().toPromise().then(
        rez=>{
          
          this.ms.updateUserProfile(rez);
        }).catch(err=>{});
        this.showLoding=true;
      this.router.navigateByUrl("/home/feeds/0/0");
      this.toastrService.success("connected successfully");
      
    }).catch(err => {
      this.showLoding=false;
        this.toastrService.error(err.error['error']);
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
        this.vs.socialSignIn(userData.token,socialPlatform).subscribe((res) => {
          
          localStorage.token =res.access_token;
          this.router.navigateByUrl("/home/feeds/0/0");
        }, (err) => {
        
          this.showLoding=false;console.log(err)})
      }
    );
  }
}
