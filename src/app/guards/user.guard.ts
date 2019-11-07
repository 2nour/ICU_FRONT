import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { Observable } from 'rxjs';
import {MemberService} from './../services/member.service'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

 
  constructor(private router :Router,private ms:MemberService){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!this.ms.isLoggedIn)
      {

        
        this.router.navigate(['/restorePSW']);
        return false
      }
      else

      this.router.navigate(['/home-profile']);

      return true;
  }
  
}
