import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-projects-feed',
  templateUrl: './projects-feed.component.html',
  styleUrls: ['./projects-feed.component.css']
})
export class ProjectsFeedComponent implements OnInit {

  public projects;
  public currentMenu = "0/0";

  constructor(private projectService:ProjectService, private router:Router, private route:ActivatedRoute) {
    this.ngOnInit();
   }

  ngOnInit() {
    this.router.events.subscribe(params => {
      if(params instanceof NavigationEnd) {
        let url = params.url;
        let p1 = this.route.snapshot.params.p1;
        let p2 = this.route.snapshot.params.p2;
        this.currentMenu = p1+"/"+p2;
        if(p1==0) {
          this.getProjects("projects");
        }
        else if(p1==1) {
          if(p2==1)
            this.getProjects("finishedProjects");
          else if(p2==2)
            this.getProjects("unfinishedProjects");
        }
        else if(p1==2) {
          if(p2==1)
            this.getProjects("platformProjects/Facebook");
          if(p2==2)
            this.getProjects("platformProjects/Instagram");
          if(p2==3)
            this.getProjects("platformProjects/Pinterest");
          if(p2==4)
            this.getProjects("platformProjects/Twitter");
        }
      }
    });
  }

  private getProjectsByFilter(p1:number, p2:number) {
    this.currentMenu = p1+"/"+p2;
    this.router.navigateByUrl("/feeds/"+p1+"/"+p2);
  }


  private getProjects(choice) {
    this.projectService.getResource(choice)
    .subscribe(data=>{
        this.projects = data['data'];
        console.log(data);
      },(error) => {
        console.log(error);
      }
    );
  }

  public isJustPinterestProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length == 1 && project.targetedCriterias.targetedPlatforms[0] == 'Pinterest';
  }
  
  public isJustFacebookProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length == 1 && project.targetedCriterias.targetedPlatforms[0] == 'Facebook';
  }
  
  public isJustInstagramProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length == 1 && project.targetedCriterias.targetedPlatforms[0] == 'Instagram';
  }

  public isJustTikTokProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length == 1 && project.targetedCriterias.targetedPlatforms[0] == 'TikTok';
  }

  public isJustTwitterProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length == 1 && project.targetedCriterias.targetedPlatforms[0] == 'Twitter';
  }

  public isMultiPlatformesProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length != 1;
  }

  public isNotDefPlatformesProj(project) {
    return !project.targetedCriterias || project.targetedCriterias.targetedPlatforms.length <= 0;
  }

}
