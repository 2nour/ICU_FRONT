import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MemberService } from "./../../../services/member.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from "@angular/router";




@Component({
  selector: 'app-restore-psw',
  templateUrl: './restore-psw.component.html',
  styleUrls: ['./restore-psw.component.css']
})
export class RestorePSWComponent implements OnInit {

  restoreform: FormGroup;

  constructor(private ms: MemberService, private restoForm: FormBuilder, private router: Router,private toast:ToastrService,private actRout:ActivatedRoute) {

    this.restoreform = restoForm.group({

      email: new FormControl("", [
        Validators.required,
        Validators.email
      ])

    })


  }

  get email() {
    return this.restoreform.get('email');
  }

  ngOnInit() {
    
  }

  send() {
    const email = this.restoreform.value.email;

    this.ms.requestNewPassWord(email).subscribe((res) => {
      console.log("ouiiiiiii");
      console.log(res);
    
     

     
      
      //this.router.navigateByUrl("/home-profile");

    }, (err) => {console.log("noooooooooo!");
    this.toast.success('An email has been sent ');

              this.router.navigateByUrl("/");
              
             

   
  })


  }





}
