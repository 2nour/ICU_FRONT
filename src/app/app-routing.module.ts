import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/landing_page/login/login.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { NavbarProfileComponent } from './components/commun/navbar-profile/navbar-profile.component';
import { NavbarSecondaryComponent } from './components/commun/navbar-secondary/navbar-secondary.component';
import { FavoritsComponent } from './components/user-profile/profile/favorits/favorits.component';
import { ArchiveComponent } from './components/user-profile/profile/archive/archive.component';
import { CollabsComponent } from './components/user-profile/profile/collabs/collabs.component';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';
import { ProjectsComponent } from './components/Project/create_project/projects.component';
import { UserGuard } from './guards/user.guard'
import { from } from 'rxjs';
import { UserProjectComponent } from './components/user-profile/profile/user-project/user-project.component';
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component';
import { NewPasswordComponent } from './components/landing_page/new-password/new-password.component';
import { EmailVerficationComponent } from './components/landing_page/email-verfication/email-verfication.component';
import { SignUpComponent } from './components/landing_page/sign-up/sign-up.component';
import { SignUpInGuard } from './guards/sign-up-in.guard';
import { ProfileGuard } from './guards/profile.guard';
import { ProjectGuard } from './guards/project.guard';
import { ProjectsFeedComponent } from './components/Project/projects-feed/projects-feed.component';
import { ContributeComponent } from './components/Project/contribute/contribute.component';
import { ViewProjectComponent } from './components/Project/view-project/view-project.component';
import { Profile } from 'selenium-webdriver/firefox';


const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'contribute',
    component: ContributeComponent
  },

  {

    path: 'login',
    component: LoginComponent,
    canActivate: [SignUpInGuard]

  },

  {

    path: 'signUp',
    component: SignUpComponent,
    canActivate: [SignUpInGuard]
  },

  {
    path: 'update-profile',
    component: UpdateProfileComponent,
    canActivate: [UserGuard]
  },
  {
    path: 'profile',
    component: NavbarProfileComponent,
    canActivate: [UserGuard],
    children: [
      { path: 'view-Project', component: ViewProjectComponent, canActivate: [UserGuard]},
      { path: 'user-archive', component: ArchiveComponent, canActivate: [UserGuard] },
      { path: 'user-collabs', component: CollabsComponent, canActivate: [UserGuard] },
      { path: 'user-favorits', component: FavoritsComponent, canActivate: [UserGuard] },
      { path: 'user-project', component: UserProjectComponent, canActivate: [UserGuard] },
      { path: 'update-profile', component: UpdateProfileComponent },
      { path: '', component: NavbarSecondaryComponent ,canActivate:[UserGuard]},

    ]
    },
    {
      path: 'home',
      component: NavbarProfileComponent,
      canActivate: [UserGuard],
      children: [
        { path: 'feeds/:p1/:p2', component: ProjectsFeedComponent},     
      ]
      },
  {
    path: 'projects',
    component: ProjectsComponent,
    canActivate:[UserGuard,ProfileGuard],
    canDeactivate:[ProjectGuard]
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
  // {
  //   path: '**',
  //   component: HomeComponent,

  // },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
