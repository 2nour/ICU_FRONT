import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private URL = "http://127.0.0.1:8000/api/";
  private user:User;
  constructor(private http:HttpClient) { }
  login(u: User) {
    //console.dir(u);
    this.user=u;
    return this.http.post<any>(this.URL+"login",u);

  }
  update(u: User){
    return this.http.post<any>(this.URL+"update",u);
  }

  requestNewPassWord(mail:String)
  {
    return this.http.post<any>(this.URL+"password/create",{
      "email":mail
    });
  }

  checkNewPasswordrequest(t:String)
  {
    return this.http.get<any>(this.URL+"password/find/"+t);
  }
  getUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.getToken()
      })
      
    };
    return this.http.get<User>(this.URL+'userProfile',httpOptions);
  }
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  deleteToken() {
    localStorage.removeItem('token');
  }



  SendNewPassWord(psw:String,token:String)
  {
    return this.http.post<any>(this.URL+"password/reset",
    {
      'password':psw,
      'token':token,
    }
    );
  }


}