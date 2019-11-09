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

 async ngOnInit():Promise<void> {
    const data=await this.dataService.getUser().toPromise().then(rez=>{
      this.user=rez;
    }).catch(error => { console.log(error); });
  }

}
