import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-feed',
  templateUrl: './projects-feed.component.html',
  styleUrls: ['./projects-feed.component.css']
})
export class ProjectsFeedComponent implements OnInit {

  public projects;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getResource("projects")
      .subscribe(data=>{
          this.projects = data;
          console.log(this.projects);
        },(error) => {
          console.log(error);
        }
      );
  }

  getUserProfile() {
    
  }

  public media(ressource) {
    return "http://localhost:8000/"+ressource;
  }

  

}
