import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { MemberService } from '../services/member.service';


@Injectable({
  providedIn: 'root'
})
export class SignUpInGuard implements CanActivate {

  

  token:boolean=false;

  constructor(private router :Router,private memberService:MemberService){
    
  }
  

 async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Promise<boolean>{
      const data=await this.memberService.getUser().toPromise().then(
        res=>{
          this.token=false;
          this.router.navigate(['/home-profile']);
        }).catch(
        err=>{
          this.token=true;
        }
      );
      
      return this.token;
    }
  
}
