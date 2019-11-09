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

  async ngOnInit():Promise<void> {
    this.route.paramMap.subscribe(params => {
      this.emailToken = params.get("emailToken")
    })
    
    await this.emailVerficationService.emailVerfication(this.emailToken).toPromise().then((res) => {
      
      this.msg="account activated successfully";
    }).catch(err=>{
      
        this.msg="This activation token is invalid.";
      }
    
    );
    this.loding=false;
    
    setTimeout(() => {
      this.router.navigateByUrl("/"); 
    }, 3000);
  }

}
