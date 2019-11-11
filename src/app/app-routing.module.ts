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
import { ProjectsComponent } from './components/Project/projects/projects.component';
import { UserGuard } from './guards/user.guard'
import { from } from 'rxjs';
import { UserProjectComponent } from './components/user-profile/profile/user-project/user-project.component';
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component';
import { NewPasswordComponent } from './components/landing_page/new-password/new-password.component';
import { EmailVerficationComponent } from './components/email-verfication/email-verfication.component';
import { SignUpComponent } from './components/landing_page/sign-up/sign-up.component';
import { SignUpInGuard } from './guards/sign-up-in.guard';
import { ProfileGuard } from './guards/profile.guard';
import { ProjectsFeedComponent } from './components/Project/projects-feed/projects-feed.component';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

 {

    path: 'login',
    component: LoginComponent,
    canActivate:[SignUpInGuard]

  }, {

    path: 'signUp',
    component: SignUpComponent,
    canActivate:[SignUpInGuard]
  },

  {
    path: 'update-profile',
    component: UpdateProfileComponent,
    canActivate:[UserGuard]
  },
  {
    path: 'home-profile',
    component: NavbarProfileComponent, 
    canActivate: [UserGuard],
    children: [
      { path: 'user-archive', component: ArchiveComponent, canActivate: [UserGuard] },
      { path: 'user-collabs', component: CollabsComponent, canActivate: [UserGuard]},
      { path: 'user-favorits', component: FavoritsComponent, canActivate: [UserGuard] },
      { path: 'user-project', component: UserProjectComponent, canActivate: [UserGuard] },
      { path: 'update-profile', component: UpdateProfileComponent },
      /*{ path: 'projects', component: ProjectsComponent, canActivate:[UserGuard,ProfileGuard] 
      }*/
    ],

  },
  { path: 'projects', component: ProjectsComponent},
  { path: 'feeds', component: ProjectsFeedComponent},
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate:[UserGuard,ProfileGuard]
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
  {
    path: '**',
    component: HomeComponent,

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
