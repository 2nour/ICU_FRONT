import { Component, OnInit, ɵConsole, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';
import {Router} from "@angular/router"
import { Copy } from 'src/app/models/Copy';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Media } from 'src/app/models/Media';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';
import { ContributionsCriterias } from 'src/app/models/ContributionsCriterias';
import { User } from 'src/app/models/User';
import { TargetedCriterias } from 'src/app/models/TargetedCriterias';

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
  public levels = new Array("Lieutenant", "Capitain", "Colonel", "General");
  public usersTypes = new Array("cosmetic", "school", "clothing", "lingerie", "food");
  public platforms = new Array("Facebook", "Instagram", "TikTok", "Peinterest");
  private fileUsed = "";
  public userProfile:UserProfile;
<<<<<<< Updated upstream:src/app/components/Project/projects/projects.component.ts
  public projects;
  projectPublished:boolean=false;
=======

>>>>>>> Stashed changes:src/app/components/Project/create_project/projects.component.ts

  constructor(private projectService:ProjectService, private projectFormBuilder: FormBuilder, private router:Router, private dataService:MemberService, public membService:MemberService) { 
    this.menue = 1;
    this.projectForm = projectFormBuilder.group({
      description : new FormControl("", [Validators.required, Validators.minLength(5)]),
      title : new FormControl("", [Validators.required, Validators.minLength(5)]),
      finished : new FormControl(false, [Validators.required]),
      text : new FormControl("", [Validators.nullValidator]),
      limitDate : new FormControl((new Date("0000/00/00")).getDate()),
      sex : new FormControl("3"),
      ageMax : new FormControl(0),
      ageMin : new FormControl(0),
      community : new FormControl(""),
      contributerLevel : new FormControl(""),
      targetedUsers : new FormControl(""),
      targetedPlatforms : new FormControl("")
    });
    
  }

<<<<<<< Updated upstream:src/app/components/Project/projects/projects.component.ts


  ngOnInit() {
    this.membService.getUser().subscribe(rez=>{
      this.userProfile=rez;
    },(error) => {});

  }



  public addProject() {
    let data = this.projectForm.value; 
    const project = new Project(data.title, data.description, data.finished, null, null, null, null,true);    
=======
 async ngOnInit() :Promise<void>{
   await this.membService.getUser().toPromise().then(rez=>{
      this.userProfile=rez;
    }).catch(error => {console.log(error)});
  }

  public addProject(draft:boolean) {
    let data = this.projectForm.value;
    const project = new Project(data.title, data.description, data.finished, null, null, null, null,draft);    
>>>>>>> Stashed changes:src/app/components/Project/create_project/projects.component.ts
    if(data.text != "" && data.text != null) 
      project.copy = new Copy(data.text);
    if(data.limitDate!=""&&(data.limitDate!=""||data.contributerLevel!=""||data.comunities!="")) {
      project.contributionsCriterias = new ContributionsCriterias(data.limitDate, null, data.contributerLevel);
      if(data.community!=new Array())
<<<<<<< Updated upstream:src/app/components/Project/projects/projects.component.ts
        project.contributionsCriterias.community = data.community.join();
=======
        project.contributionsCriterias.community = this.comunities.join();
>>>>>>> Stashed changes:src/app/components/Project/create_project/projects.component.ts
    }
    if(data.sex!="3"||data.ageMax!=0||data.ageMin!=0||data.targetedUsers!=""||data.targetedPlatforms!="") {
      project.targetedCriterias = new TargetedCriterias(data.sex, data.ageMax, data.ageMin, null, null);
      if(data.targetedUsers!=new Array())
<<<<<<< Updated upstream:src/app/components/Project/projects/projects.component.ts
        project.targetedCriterias.targetedUsers = data.targetedUsers.join(); 
      if(data.targetedPlatforms!=new Array())
        project.targetedCriterias.targetedPlatforms = data.targetedPlatforms.join(); 
=======
        project.targetedCriterias.targetedUsers = data.targetedUsers.join();
      if(data.targetedPlatforms!=new Array())
        project.targetedCriterias.targetedPlatforms = data.targetedPlatforms.join();
>>>>>>> Stashed changes:src/app/components/Project/create_project/projects.component.ts
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
            this.projectPublished=true;
            if(event.type === HttpEventType.UploadProgress) {
              this.progress = Math.round(100*event.loaded/event.total);
            }
            else if (event instanceof HttpResponse) {
              this.timeStamp = Date.now();
            }
            //window.location.reload();
          }, error => {
            this.projectPublished=false;
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
            console.log("saved Data  ");
            this.projectPublished=true;
            window.location.reload();
          },error => {
            console.log(error);
<<<<<<< Updated upstream:src/app/components/Project/projects/projects.component.ts
            this.projectPublished=false;
=======
>>>>>>> Stashed changes:src/app/components/Project/create_project/projects.component.ts
          });
        }
    }
  } 
  public addProjectDraft() {
    let data = this.projectForm.value;
    
    const project = new Project(data.title, data.description, data.finished, null, null, null, null,true);    
    if(data.text != "" && data.text != null) 
      project.copy = new Copy(data.text);
    if(data.limitDate!=""||data.contributerLevel!=""||data.comunities!="") {
      project.contributionsCriterias = new ContributionsCriterias(data.limitDate, null, data.contributerLevel);
      if(data.community!=new Array())
        project.contributionsCriterias.community = this.comunities.join();
    }
    if(data.sex!="3"||data.ageMax!=0||data.ageMin!=0||data.targetedUsers!=""||data.targetedPlatforms!="") {
      project.targetedCriterias = new TargetedCriterias(data.sex, data.ageMax, data.ageMin, null, null);
      if(data.targetedUsers!=new Array())
        project.targetedCriterias.targetedUsers = data.targetedUsers.join();
      if(data.targetedPlatforms!=new Array())
        project.targetedCriterias.targetedPlatforms = data.targetedPlatforms.join();
    }
    if(this.selectedFile!=undefined){
      this.currentFileUpload = this.selectedFile.item(0);
      project.media = new Media(this.currentFileUpload, this.selectedFile.item(0)["type"]);
      console.dir(project);
        this.projectService.registerWithPhoto(project)
          .subscribe(event=> {
          }, error => {

          });
    }
    else {
        this.projectService.register(project)
          .subscribe(data => {
          },error => {
            console.log(error);
          });
        
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
    return this.text=="" && this.fileUsed=="";
  }

  set ageMax(value) {
    if(value>=Number(this.projectForm.get('ageMin')["value"])+1)
      this.ageMax = value;
  }

  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
      if (!this.projectPublished) {
        this.addProjectDraft();
      }
  }

}
