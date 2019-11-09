import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ProjectsComponent } from '../components/Project/projects/projects.component';

@Injectable({
  providedIn: 'root'
})
export class ProjectGuard implements CanDeactivate<ProjectsComponent> {

  constructor() {}


  canDeactivate(projectsComponent:ProjectsComponent):boolean {
    if(confirm("voulez vous quitter ?"))
    {
      projectsComponent.addProject(true);
      return true;
    }

    return false;
  }
  
}
