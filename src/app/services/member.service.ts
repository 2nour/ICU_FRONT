import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { User } from '../models/User';

import { UserProfile } from '../models/UserProfile';
import { Media } from '../models/Media';
import { BehaviorSubject, Observable } from 'rxjs';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MemberService  {

  private URL = "http://127.0.0.1:8000/api/";
  private user:User;
  private userProfileBehaviorSubject:BehaviorSubject<UserProfile>;
  userProfile:Observable<UserProfile>;
  valideToken:boolean=false;

  constructor(private http:HttpClient) { 
    this.getUser().toPromise().then(
      rez=>{
        this.userProfileBehaviorSubject=new BehaviorSubject<UserProfile>(rez);
        this.userProfile=this.userProfileBehaviorSubject.asObservable();
      }).catch(err=>{});
  }
     
  login(u: User) {
    //console.dir(u);
    this.user=u;
    return this.http.post<any>(this.URL+"login",u);

  }
  
  logout(){
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer '+this.getToken()
     })
    
    };
    return this.http.get<any>(this.URL+"logout",httpOptions);
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
    formdata.append('profilePicture', picture.file);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+this.getToken()
      })
      
    };
    return this.http.post<any>(this.URL+"updateProfilePicture", formdata, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem('token')
      }),
      reportProgress : true
    });
  }
  updateUserProfile(userProfile:UserProfile){
        this.userProfileBehaviorSubject.next(userProfile);
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