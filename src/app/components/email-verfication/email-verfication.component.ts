import { Component, OnInit } from '@angular/core';
import {EmailVerficationService} from './../../services/email-verfication.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-verfication',
  templateUrl: './email-verfication.component.html',
  styleUrls: ['./email-verfication.component.css']
})
export class EmailVerficationComponent implements OnInit {

  loding:Boolean=true;
  emailToken:String;
  msg:String;
  constructor(private emailVerficationService:EmailVerficationService,private route: ActivatedRoute,private router:Router) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.emailToken = params.get("emailToken")
    })
    
    this.emailVerficationService.emailVerfication(this.emailToken).subscribe((res) => {
      
      this.msg="account activated successfully";
    }, (err) =>{
      
        console.log(err);
        this.msg="This activation token is invalid.";
      }
    
    );
    this.loding=false;
    
    setTimeout(() => {
      this.router.navigateByUrl("/"); 
    }, 3000);
  }

}
