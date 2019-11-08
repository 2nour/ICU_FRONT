import { Component, OnInit, ɵConsole } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';
import {Router} from "@angular/router"
import { Copy } from 'src/app/models/Copy';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Media } from 'src/app/models/Media';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';
import { Criterias } from 'src/app/models/Criterias';
import { User } from 'src/app/models/User';

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
  public comunities = new Array("Developers", "Artists", "Photographers", "Sports");
  private fileUsed = "";
  public userProfile;


  constructor(private projectService:ProjectService, private projectFormBuilder: FormBuilder, private router:Router, private dataService:MemberService, public membService:MemberService) { 
    this.menue = 1;
    this.projectForm = projectFormBuilder.group({
      description : new FormControl("", [Validators.required, Validators.minLength(5)]),
      title : new FormControl("", [Validators.required, Validators.minLength(5)]),
      finished : new FormControl(false, [Validators.required]),
      text : new FormControl("", [Validators.nullValidator]),
      limitDate : new FormControl(""),
      sex : new FormControl("3"),
      ageMax : new FormControl(0),
      ageMin : new FormControl(0),
      community : new FormControl(""),
    });
    this.ngOnInit();
  }

  ngOnInit() {
    this.membService.getUser().then(
      (value) => {
        value.subscribe(rez=>{
          this.userProfile=rez;
        });
      },(error) => {
      }
    );
  }

  public addProject() {
    let data = this.projectForm.value;
    const project = new Project(data.title, data.description, data.finished, null, null, null);    
    if(data.text != "" && data.text != null) 
      project.copy = new Copy(data.text);
    if(data.limitDate!=""&&(data.sex!=0||data.ageMax!=0||data.ageMin!=0||data.community!="")) {
      if(data.community!=new Array())
        project.criteria = new Criterias(data.limitDate, data.sex, data.ageMax, data.ageMin, data.community.join());
      else
        project.criteria = new Criterias(data.limitDate, data.sex, data.ageMax, data.ageMin, "");
      
    }
    if(this.selectedFile!=undefined){
      this.progress = 0;
      this.currentFileUpload = this.selectedFile.item(0);
      project.media = new Media(this.currentFileUpload, this.selectedFile.item(0)["type"]);
      
      if(!this.invalid) {
        if(this.text!="" && this.fileUsed!="")
          project.finished = 1;
        this.projectService.registerWithPhoto(project)
          .subscribe(event=> {
            if(event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100*event.loaded/event.total);
            }
            else if (event instanceof HttpResponse) {
              this.timeStamp = Date.now();
            }
            console.log(project);
          }, error => {
            console.log(error);
          });
      }
    }
    else {
      if(!this.invalid) {
        if(this.text!="" && this.fileUsed!="") 
          project.finished = 1;
        this.projectService.register(project)
          .subscribe(data => {
            console.log("Données enregistrées : "+data);
          },error => {
            console.log("Erreur ajout projet : "+error);
          });
        }
    }
  } 

  onSelectedFile(event) {
    this.fileUsed = "file";
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

  get titleValue() {
    return this.projectForm.get('title')["value"];
  }

  get descriptionValue() {
    return this.projectForm.get('description')["value"];
  }

  get finishedValue() {
    return this.projectForm.get('finished')["value"];
  }

  get text() {
    return this.projectForm.get('text')["value"];
  }

  get invalid():boolean {
    console.log(this.text);
    console.log(this.fileUsed);
    return this.text=="" && this.fileUsed=="";
  }

  set ageMax(value) {
    if(value>=Number(this.projectForm.get('ageMin')["value"])+1)
      this.ageMax = value;
  }

}
