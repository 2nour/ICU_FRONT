import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private URL = "http://127.0.0.1:8000/api/";
  

  constructor(private http:HttpClient) { }

  login(u: User) {
    //console.dir(u);
    return this.http.post<any>(this.URL+"login",u);

  }
  update(u:User){
    return this.http.post<any>(this.URL+"update",u);

  }

  requestNewPassWord(mail:String)
  {
    return this.http.post<any>(this.URL+"password/create",mail);
  }

  SendNewPassWord()
  {
    
  }
  getUser() {
    return this.http.get<User>(this.URL+'profiles');
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



}