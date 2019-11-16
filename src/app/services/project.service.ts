import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent, HttpRequest } from '@angular/common/http';
import { Project } from '../models/Project';
import { Observable,BehaviorSubject } from 'rxjs';
import { url } from 'inspector';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private path="http://127.0.0.1:8000/api/";
  userP:Project;

  constructor(private http :HttpClient) {
    this.getProject().then(
      res=>{
        this.userP=res;
      },
      err=>{
        console.error(err)
      }
    );
  }

  public getResource(ressource) {
    return this.http.get(this.path+ressource, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
      })
    });
  }

  public register(project:Project) {
    return this.http.post<any>(this.path+"project", project, {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Bearer '+localStorage.getItem('token')
      })
    });
  }

  
  async getProject():Promise<Project> {
      return await this.http.get<Project>(this.path+'projects/1').toPromise();
  }

  public registerWithPhoto(project:Project) {
    let formdata : FormData = new FormData();
    formdata.append('file', project.media.file);
    formdata.append('project', JSON.stringify(project));
    
    return this.http.request(new HttpRequest('POST', this.path+"project", formdata, {
      reportProgress : true, 
      responseType : 'text',  
      headers: new HttpHeaders({
        'Authorization': 'Bearer '+localStorage.getItem('token')
      })
    })

    );

  }

  viewUnfinishedProject()
  {
    return this.http.get<any>(this.path+"unfinishedProjects");
  }

  
  viewProjectById()
  {
    return this.http.get<any>(this.path+"projects/{id}");
  }
 


  


}






