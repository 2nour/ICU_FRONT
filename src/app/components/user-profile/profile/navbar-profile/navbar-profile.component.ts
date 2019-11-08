import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {

  user:UserProfile;
  constructor(private dataService:MemberService) { }

  ngOnInit() {
    this.dataService.getUser().then(
      res=>{
        res.subscribe(
          rez=>{
            this.user=rez; 
          }
        )
      },
      err=>{
      }
    );
  }

}
