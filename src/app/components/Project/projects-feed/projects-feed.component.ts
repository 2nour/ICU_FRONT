import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-feed',
  templateUrl: './projects-feed.component.html',
  styleUrls: ['./projects-feed.component.css']
})
export class ProjectsFeedComponent implements OnInit {

  public projects;
  public profiles = [];
  public test;

  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projectService.getResource("projects")
      .subscribe(data=>{
          this.projects = data['data'];
          console.log(this.projects);
          
        },(error) => {
          console.log(error);
        }
      );
      
          
         
  }
  

  

}
