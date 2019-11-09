import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {

  user:UserProfile;
  constructor(private memberService:MemberService,private router:Router) { }

  ngOnInit(){
    this.memberService.userProfile.subscribe(userProfile=>this.user=userProfile);
  }

  logout(){
    this.memberService.logout().subscribe(
        success=>{
          this.memberService.deleteToken();
          this.router.navigateByUrl("/");
      },
        err=>console.log(err)
    );
  }
}
