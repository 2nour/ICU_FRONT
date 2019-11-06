import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/landing_page/login/login.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { NavbarProfileComponent } from './components/user-profile/profile/navbar-profile/navbar-profile.component';
import { NavbarSecondaryComponent } from './components/user-profile/profile/navbar-secondary/navbar-secondary.component';
import { ProjectComponent } from './components/user-profile/profile/project/project.component';
import { FavoritsComponent } from './components/user-profile/profile/favorits/favorits.component';
import { ArchiveComponent } from './components/user-profile/profile/archive/archive.component';
import { CollabsComponent } from './components/user-profile/profile/collabs/collabs.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent

  },
    
  { path: 'projects', component:ProjectsComponent },
  { path: 'home-profile', component: NavbarProfileComponent, children: [
    { path: 'archive', component: ArchiveComponent },
    { path: 'collabs', component:CollabsComponent },
    { path: 'favorits', component:FavoritsComponent },
    { path: 'project', component:ProjectComponent },
    { path: 'user-archive', component: ArchiveComponent },
    { path: 'user-collabs', component:CollabsComponent },
    { path: 'user-favorits', component:FavoritsComponent },
    { path: 'user-project', component:ProjectComponent },
    { path: 'update-profile', component:UpdateProfileComponent}

  ] },    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
