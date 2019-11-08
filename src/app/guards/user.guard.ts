import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree ,Router} from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {MemberService} from './../services/member.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate{

  token:boolean=false;

  constructor(private router :Router,private ms:MemberService,private http:HttpClient){
    
  }
  

 canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean{
      if(!this.ms.isLoggedIn)
      {
        this.router.navigate(['/login']);
        return false
      }
      

      return true;
    }
}
