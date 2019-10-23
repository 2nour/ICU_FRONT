import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/landing_page/login/login.component';
import { SignUpComponent } from './components/landing_page/sign-up/sign-up.component';

const routes: Routes = [
  {
    path:"login-component", 
    component:LoginComponent 
  },
  {
    path:"sign-up", 
    component:SignUpComponent 
  }
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
