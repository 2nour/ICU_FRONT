import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';
import {Router} from "@angular/router"
import { Copy } from 'src/app/models/Copy';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Media } from 'src/app/models/Media';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public menue:number;
  public projectForm : FormGroup;
  private progress : number = undefined;
  private selectedFile = undefined; 
  private currentFileUpload;
  private timeStamp : number;

  constructor(private projectService:ProjectService, private projectFormBuilder: FormBuilder, private router:Router) { 
    this.menue = 1;
    this.projectForm = projectFormBuilder.group({
      description : new FormControl("", [Validators.required, Validators.minLength(5)]),
      title : new FormControl("", [Validators.required, Validators.minLength(5)]),
      text : new FormControl("")
    });
  }

  ngOnInit() {
  }

  public addProject() {
    let data = this.projectForm.value;
    const project = new Project(data.title, data.description, 1, null, null);    
    if(data.text != "" && data.text != null) 
      project.copy = new Copy(data.text);
    if(this.selectedFile!=undefined){
      this.progress = 0;
      this.currentFileUpload = this.selectedFile.item(0);
      
      project.media = new Media(this.currentFileUpload, "Photo");
      console.log(project);
      this.projectService.registerWithPhoto(project)
      .subscribe(event=> {
        if(event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100*event.loaded/event.total);
        }
        else if (event instanceof HttpResponse) {
          this.timeStamp = Date.now();
        }
      }, error => {
        console.log(error);
      });
    }
    else {
      this.projectService.register(project)
        .subscribe(data => {
          console.log("Données enregistrées : "+data);
        },error => {
          console.log("Erreur ajout projet : "+error);
        });
    }
  } 

  onSelectedFile(event) {
    this.selectedFile = event.target.files;
  }





  public onChoose(choice:number) {
    this.menue = choice;
  }

  get description() {
    return this.projectForm.get('description');
  }

  get title() {
    return this.projectForm.get('title');
  }


}
