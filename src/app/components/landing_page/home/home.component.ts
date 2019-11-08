import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Title }     from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ms:MemberService,private title: Title) { 
    this.title.setTitle("I C U");
  }

  ngOnInit() {
  }

}
