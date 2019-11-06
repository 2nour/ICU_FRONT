import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Project } from '../models/Project';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private URL="http://127.0.0.1:8000/api/";

  constructor(private http :HttpClient) { }

  public register(project:Project) {
    return this.http.post<any>(this.URL+"project", project);
  }

  public registerWithPhoto(project:Project) {
    let formdata : FormData = new FormData();
    formdata.append('file', project.media.file);
    formdata.append('project', JSON.stringify(project));
    console.log(JSON.stringify(project));
    return this.http.request(new HttpRequest('POST', this.URL+"project", formdata, {
      reportProgress : true, 
      responseType : 'text',
    }));
  }



}






