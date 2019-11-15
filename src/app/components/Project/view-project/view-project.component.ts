import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';
import { MemberService } from 'src/app/services/member.service';
import { User } from 'src/app/models/User';
import { UserProfile } from 'src/app/models/UserProfile';
import { ProjectU } from 'src/app/models/ProjectU';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
project:Project;
user:UserProfile;
  constructor(private projectService:ProjectService, private memberService:MemberService) {
    
   }

  async ngOnInit(){
   this.memberService.userProfile.subscribe(userProfile=>{
    this.user=userProfile;
   },err=>console.log(err));
   
    await this.projectService.getProject().subscribe(
      res=>{
        this.project=res[0];
        
        
      },
      err=>{
        console.error(err)
      }
    );;
   console.log(" aaaa"+this.project);  }

}
