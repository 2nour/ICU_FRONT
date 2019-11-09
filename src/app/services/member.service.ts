import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../models/User';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { $ } from 'protractor';
import { UserProfile } from '../models/UserProfile';
import { of, Observable } from 'rxjs';
import { resolve } from 'url';
import { reject } from 'q';
import { Media } from '../models/Media';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private URL = "http://127.0.0.1:8000/api/";
  private user:User;
  private userP:UserProfile;
  valideToken:boolean=false;

  constructor(private http:HttpClient) { }
  login(u: User) {
    //console.dir(u);
    this.user=u;
    return this.http.post<any>(this.URL+"login",u);

  }
  
  update(u: UserProfile){
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.getToken()
      })
      
    };
    return this.http.post<any>(this.URL+"update_profile",u,httpOptions);
  }
  updateProfilePicture(picture:Media){
    let formdata : FormData = new FormData();
    formdata.append('file', picture.file);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.getToken()
      })
      
    };
    return this.http.request(new HttpRequest('POST', this.URL+"updateProfilePicture", formdata, {
      reportProgress : true, 
      responseType : 'text',  
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem('token')
      })
    })

    );
  }
   getUser() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.getToken()
      })
    };
    return  this.http.get<UserProfile>(this.URL+'userProfile',httpOptions);
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