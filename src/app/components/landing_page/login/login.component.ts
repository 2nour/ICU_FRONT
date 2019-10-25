import { Component, OnInit } from '@angular/core';
import { MemberService } from "./../../../services/member.service"
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from './../../../models/User'

import { visitAll } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup;


  constructor(private vs:MemberService, private signForm: FormBuilder) {

    this.loginform = signForm.group({
      username: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      email : new FormControl("",[
        Validators.required,
        Validators.email
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

    


  }
}
