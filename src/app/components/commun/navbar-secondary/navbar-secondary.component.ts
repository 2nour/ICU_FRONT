import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Router } from '@angular/router';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-navbar-secondary',
  templateUrl: './navbar-secondary.component.html',
  styleUrls: ['./navbar-secondary.component.css']
})
export class NavbarSecondaryComponent implements OnInit {

  user:UserProfile;
  showLoding:boolean=false;
  constructor(private memberService:MemberService,private router:Router) { }

  ngOnInit(){
    this.showLoding=true;
      try {

        this.memberService.userProfile.subscribe(userProfile=>{
          this.user=userProfile;
          this.showLoding=false;
        },err=>{
          this.showLoding=false;
          window.location.reload(true);
        });
      } catch (error) {
        this.showLoding=false;
        window.location.reload(true);
      } 
  }

}
