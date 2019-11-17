import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Project } from 'src/app/models/Project';
import { MemberService } from 'src/app/services/member.service';
import { User } from 'src/app/models/User';
import { UserProfile } from 'src/app/models/UserProfile';
import { ProjectU } from 'src/app/models/ProjectU';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
project:ProjectU;
user:UserProfile;
  constructor(private projectService:ProjectService, private memberService:MemberService, private route:ActivatedRoute) {
    
   }

  async ngOnInit(){
    this.route.paramMap.subscribe(async (params) => {          
    await this.projectService.getProject(params.get("projectId")).subscribe(
      res=>{
        this.project=res[0];
        this.project.firstName=res[0].user.profile.firstName;
        this.project.lastName=res[0].user.profile.lastName;
        this.project.profilePhoto=res[0].user.profile.profilePhoto;
        this.project.location=res[0].user.profile.location;
                        
      },
      err=>{
        console.error(err)
      }
    );

})

  }
}
