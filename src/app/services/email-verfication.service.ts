import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmailVerficationService {
  
  private URL="http://127.0.0.1:8000/api/";

  constructor(private http :HttpClient) { }

  emailVerfication (emailToken:String)
  {
    return this.http.get<any>(this.URL+"signup/activate/"+emailToken);
  }
}
