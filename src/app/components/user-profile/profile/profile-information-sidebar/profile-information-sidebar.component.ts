import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { User } from 'src/app/models/User';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-profile-information-sidebar',
  templateUrl: './profile-information-sidebar.component.html',
  styleUrls: ['./profile-information-sidebar.component.css']
})
export class ProfileInformationSidebarComponent implements OnInit {
   user:UserProfile;
  constructor(private dataService:MemberService) { }

  async ngOnInit():Promise<void> {
    const data=await this.dataService.getUser().toPromise().then(rez=>{
      this.user=rez;
    }).catch(error => { console.log(error); });
  }

}
