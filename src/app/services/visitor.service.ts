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
  


}
