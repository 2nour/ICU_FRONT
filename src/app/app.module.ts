
import { AppComponent } from './app.component';
import { LoginComponent } from './components/landing_page/login/login.component';
import { SignUpComponent } from './components/landing_page/sign-up/sign-up.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component'
import { NavbarProfileComponent } from './components/user-profile/profile/navbar-profile/navbar-profile.component';
import { NavbarSecondaryComponent } from './components/user-profile/profile/navbar-secondary/navbar-secondary.component';
import { ProjectComponent } from './components/user-profile/profile/project/project.component';
import { CollabsComponent } from './components/user-profile/profile/collabs/collabs.component';
import { FavoritsComponent } from './components/user-profile/profile/favorits/favorits.component';
import { ArchiveComponent } from './components/user-profile/profile/archive/archive.component';
import { ProfileInformationSidebarComponent } from './components/user-profile/profile/profile-information-sidebar/profile-information-sidebar.component';

/*****IMPORTS*******/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

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
import { NewPasswordComponent } from './components/landing_page/new-password/new-password.component';
import { EmailVerficationComponent } from './components/email-verfication/email-verfication.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateProfileComponent } from './components/user-profile/update-profile/update-profile.component';

import { ProjectsComponent } from './components/Project/projects/projects.component';
import { AddCopyComponent } from './components/Project/add-copy/add-copy.component';
import { AddMediaComponent } from './components/Project/add-media/add-media.component';
import { AddCriteriasComponent } from './components/Project/add-criterias/add-criterias.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    RestorePSWComponent,
    NavbarProfileComponent,
    NavbarSecondaryComponent,
    ProjectComponent,
    CollabsComponent,
    FavoritsComponent,
    ArchiveComponent,
    ProfileInformationSidebarComponent,
    NewPasswordComponent,
    EmailVerficationComponent,
    ProjectsComponent,
    UpdateProfileComponent,
    AddCopyComponent,
    AddMediaComponent,
    AddCriteriasComponent
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
    ToastrModule.forRoot({
    })
  ],
  providers: [
    Title,
    VisitorService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
