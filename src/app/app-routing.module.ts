import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/landing_page/login/login.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { NavbarProfileComponent } from './components/user-profile/profile/navbar-profile/navbar-profile.component';
import { NavbarSecondaryComponent } from './components/user-profile/profile/navbar-secondary/navbar-secondary.component';
import { FavoritsComponent } from './components/user-profile/profile/favorits/favorits.component';
import { ArchiveComponent } from './components/user-profile/profile/archive/archive.component';
import { CollabsComponent } from './components/user-profile/profile/collabs/collabs.component';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';
import { NewPasswordComponent } from './components/landing_page/new-password/new-password.component';
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component';
import { EmailVerficationComponent } from './components/email-verfication/email-verfication.component';
import { ProjectsComponent } from './components/Project/projects/projects.component';
import {UserGuard} from './guards/user.guard'
import { from } from 'rxjs';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {

    path: 'projects',
    component: ProjectsComponent,
    
  },
  { path: 'update-profile', component: UpdateProfileComponent },
  {
    path: 'home-profile',
    component: NavbarProfileComponent,
    canActivate:[UserGuard],

    children: [
      { path: 'archive', component: ArchiveComponent },
      { path: 'collabs', component: CollabsComponent },
      { path: 'favorits', component: FavoritsComponent },
      { path: 'user-archive', component: ArchiveComponent },
      { path: 'user-collabs', component: CollabsComponent },
      { path: 'user-favorits', component: FavoritsComponent },
      
    ],
    
  },
  {
    path: 'restorePSW',
    component: RestorePSWComponent,

  },
  {
    path: 'newPSW/:RestToken',
    component: NewPasswordComponent,

  },
  {
    path: 'emailVerfication/:emailToken',
    component: EmailVerficationComponent,


  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
