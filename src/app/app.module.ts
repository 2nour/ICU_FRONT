
import { AppComponent } from './app.component';
import { LoginComponent } from './components/landing_page/login/login.component';
import { SignUpComponent } from './components/landing_page/sign-up/sign-up.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component'
import { NavbarProfileComponent } from './components/commun/navbar-profile/navbar-profile.component';
import { NavbarSecondaryComponent } from './components/commun/navbar-secondary/navbar-secondary.component';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';
import { NewPasswordComponent } from './components/landing_page/new-password/new-password.component';
import { EmailVerficationComponent } from './components/landing_page/email-verfication/email-verfication.component';
import { CollabsComponent } from './components/user-profile/profile/collabs/collabs.component';
import { FavoritsComponent } from './components/user-profile/profile/favorits/favorits.component';
import { ArchiveComponent } from './components/user-profile/profile/archive/archive.component';
import { ProfileInformationSidebarComponent } from './components/user-profile/profile/profile-information-sidebar/profile-information-sidebar.component';
import { ProjectsComponent } from './components/Project/create_project/projects.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { UserProjectComponent } from './components/user-profile/profile/user-project/user-project.component';
import { CreateProfileComponent } from './components/user-profile/create-profile/create-profile.component';
import { FooterComponent } from './components/commun/footer/footer.component';

/*****IMPORTS*******/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular-6-social-login";


// Configs 
export function getAuthServiceConfigs() {
let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("Facebook-app-id")
      },
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("637835463526-d0m5ck9nf31npsc1jgnck3vu3ldsku5f.apps.googleusercontent.com")
      }
    ]
);
return config;
}


/*******PROVIDERS****/
import { Title } from '@angular/platform-browser';
import { VisitorService } from "./services/visitor.service";
import {UserGuard} from './guards/user.guard'
import { ProjectsFeedComponent } from './components/Project/projects-feed/projects-feed.component';
import {SignUpInGuard} from './guards/sign-up-in.guard';
import { ContributeComponent } from './components/Project/contribute/contribute.component';
import { ViewProjectComponent } from './components/Project/view-project/view-project.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    RestorePSWComponent,
    NavbarProfileComponent,
    NavbarSecondaryComponent,
    ProjectsComponent,
    CollabsComponent,
    FavoritsComponent,
    ArchiveComponent,
    ProfileInformationSidebarComponent,
    NewPasswordComponent,
    EmailVerficationComponent,
    ProjectsComponent,
    UpdateProfileComponent,
    FooterComponent,
    UserProjectComponent,
    ContributeComponent,
    ContributeComponent,
    CreateProfileComponent, 
    ProjectsFeedComponent, ViewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    AngularFontAwesomeModule,
    MatFormFieldModule,
    MatStepperModule,
    MatInputModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
    })
  ],
  providers: [
    Title,
    VisitorService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    UserGuard,
    SignUpInGuard
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
