import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/landing_page/login/login.component';
import { HomeComponent } from './components/landing_page/home/home.component';
import { RestorePSWComponent } from './components/landing_page/restore-psw/restore-psw.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent

  },
  {
    path:'restorePSW',
    component:RestorePSWComponent

  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
