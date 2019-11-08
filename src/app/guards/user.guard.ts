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
  

 async canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Promise<boolean> {

    await  this.ms.getUser().subscribe(
        res=>{
          this.token=true;
        },
        err=>{
          this.token=false;
        }
      );
       return this.token;
    }  
  
}
