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
  public currentMenu = 0;

  constructor(private projectService:ProjectService, private router:Router, private route:ActivatedRoute) {
    this.ngOnInit();
   }

  ngOnInit() {
    this.router.events.subscribe(params => {
      if(params instanceof NavigationEnd) {
        let url = params.url;
        let p1 = this.route.snapshot.params.p1;
        this.currentMenu = p1;
        if(p1==0) {
          this.getProjects("projects");
        }
        else if(p1==1) {
          this.getProjects("finishedProjects");
        }
        else if(p1==2) {
          this.getProjects("unfinishedProjects");
        }
      }
    });
  }

  private getProjectsByFilter(id : number) {
    this.currentMenu = id;
    this.router.navigateByUrl("/feeds/"+id);
  }


  private getProjects(choice) {
    this.projectService.getResource(choice)
    .subscribe(data=>{
        this.projects = data['data'];
      },(error) => {
        console.log(error);
      }
    );
  }

  public isJustPeinterestProj(project) {
    return project.targetedCriterias && project.targetedCriterias.targetedPlatforms.length == 1 && project.targetedCriterias.targetedPlatforms[0] == 'Peinterest';
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
