/****DECLARATIONS*****/
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



/*******PROVIDERS****/
import { Title } from '@angular/platform-browser';
import { VisitorService } from "./services/visitor.service";
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    RestorePSWComponent
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
