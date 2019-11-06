import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {

  user:User;
  constructor(private dataService:MemberService) { }


  ngOnInit() {
    return this.dataService.getUser().subscribe(data=>{
      this.user=data;
    })
  }

}
