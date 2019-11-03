
import { AppComponent } from './app.component';
import { LoginComponent } from './components/landing_page/login/login.component';
import { SignUpComponent } from './components/landing_page/sign-up/sign-up.component';
import { HomeComponent } from './components/landing_page/home/home.component';


/*****IMPORTS*******/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileComponent } from './components/user-profile/profile/profile.component';
import { NavbarProfileComponent } from './components/user-profile/profile/navbar-profile/navbar-profile.component';
import { NavbarSecondaryComponent } from './components/user-profile/profile/navbar-secondary/navbar-secondary.component';
import { ProjectComponent } from './components/user-profile/profile/project/project.component';
import { CollabsComponent } from './components/user-profile/profile/collabs/collabs.component';
import { FavoritsComponent } from './components/user-profile/profile/favorits/favorits.component';
import { ArchiveComponent } from './components/user-profile/profile/archive/archive.component';
import { ProfileInformationSidebarComponent } from './components/user-profile/profile/profile-information-sidebar/profile-information-sidebar.component';

/*******PROVIDERS****/
import { Title } from '@angular/platform-browser';
import { VisitorService } from "./services/visitor.service";
import { ProjectsComponent } from './components/projects/projects.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    ProfileComponent,
    NavbarProfileComponent,
    NavbarSecondaryComponent,
    ProjectComponent,
    CollabsComponent,
    FavoritsComponent,
    ArchiveComponent,
    ProfileInformationSidebarComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [Title,
    VisitorService],

  bootstrap: [AppComponent]
})
export class AppModule { }
