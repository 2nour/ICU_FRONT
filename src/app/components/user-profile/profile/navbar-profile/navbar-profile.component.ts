import { Component, OnInit, Input } from '@angular/core';
<<<<<<< HEAD
import { User } from 'src/app/models/User';
import { MemberService } from 'src/app/services/member.service';
=======
>>>>>>> hedi

@Component({
  selector: 'app-navbar-profile',
  templateUrl: './navbar-profile.component.html',
  styleUrls: ['./navbar-profile.component.css']
})
export class NavbarProfileComponent implements OnInit {
<<<<<<< HEAD

  user:User;
  constructor(private dataService:MemberService) { }

=======
  constructor() { }
>>>>>>> hedi

  ngOnInit() {
    return this.dataService.getUser().subscribe(data=>{
      this.user=data;
    })
  }

}
