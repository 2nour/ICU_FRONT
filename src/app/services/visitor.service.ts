import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from './../models/User';


@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  private URL="http://127.0.0.1:8000/api/";

  constructor(private http :HttpClient) { }

  register (u:User)
  {
    return this.http.post<any>(this.URL+"register",u);
  }
  
  socialSignIn (userToken:String,provider:String)
  {
    return this.http.post<any>("http://127.0.0.1:8000/oauth/token",{
      'grant_type':"social",
      'client_id':3,
      'client_secret':"2GYU5BmfCytsKAPoNHE4riIsTMgB8Ruv2oWD0G7w",
      'provider':provider,
      'access_token':userToken
    });
  }


}
