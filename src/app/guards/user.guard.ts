import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import {MemberService} from './../services/member.service'

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{

  token:boolean=false;

  constructor(private router :Router,private memberService:MemberService){
    
  }
  

 async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean>{
      const data=await this.memberService.getUser().toPromise().then(
        res=>{
          this.token=true;
        }).catch(
        err=>{
          this.token=false;
          this.router.navigate(['/login']);
        }
      );
      return this.token;
    }
}
