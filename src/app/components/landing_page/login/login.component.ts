import { Component, OnInit } from '@angular/core';
import { MemberService } from "./../../../services/member.service"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../models/User';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { visitAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
  "../../../../../node_modules/ngx-toastr/toastr.css"
  ]
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;


  constructor(private ms:MemberService, private signForm: FormBuilder, private router:Router,private toastrService:ToastrService) {

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
  }

  login() {
    let data = this.loginform.value;

    const user = new User(data.username, data.email, data.password);


    this.ms.login(user).subscribe((res) => {
      console.log("connecte");
      localStorage.token =res.TokenAuth;
      this.router.navigateByUrl("/home-profile");
      
    }, (err) => {
      console.dir(err);
      this.toastrService.error("Error",err.error.error);
    })


  
  }
}
