import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { MemberService } from '../services/member.service';
import { UserProfile } from '../models/UserProfile';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuard implements CanActivate {

  
  userProfile:UserProfile=null;

  constructor(private router :Router,private memberService:MemberService,private tosterService:ToastrService){
    
  }
  

async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean>{
      
      
   await  this.memberService.getUser().toPromise().then(
    rez=>{
      this.userProfile=rez;
    }).catch(err=>{});

      if(this.userProfile.firstName==null || this.userProfile.lastName==null || this.userProfile.bio==null || this.userProfile.url==null )
      {
        this.router.navigateByUrl('/profile/update-profile')
        this.tosterService.error('You need to finish your profile first !!','Error');
        return false;
      }
      return true;
    }
  
}
