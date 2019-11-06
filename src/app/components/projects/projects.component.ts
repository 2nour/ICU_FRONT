import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/models/UserProfile';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  user:UserProfile;
  constructor(private dataService: MemberService) { }


  ngOnInit() {
    return this.dataService.getUser().subscribe(data=>{
      this.user=data;
    })
  }
}
