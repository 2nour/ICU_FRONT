import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from "./../../../services/member.service"
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {


  newPassForm: FormGroup;
  t:String;

  constructor(private ms: MemberService, private resetForm: FormBuilder, private router: Router,private actRout:ActivatedRoute) {

    this.newPassForm = resetForm.group({

      password : new FormControl("",[
        Validators.required,
        Validators.minLength(6)
       
      ]),
      ConfirmPassword : new FormControl("",[
        Validators.required,
        Validators.minLength(6)
       
      ])
      



    })

  }

  get password() {
    return this.newPassForm.get('password');
  }

  
  get ConfirmPassword  () {
    return this.newPassForm.get('ConfirmPassword ');
  }

  ngOnInit() {

    this.actRout.paramMap.subscribe(params => {
      this.t = params.get("RestToken")
      })
        this.ms.checkNewPasswordrequest(this.t).subscribe((res) => {
        }, (err) => console.log("noooooooooo!")
        )
    
    
  }

  send() {
    let psw = this.newPassForm.value.password;
    this.ms.SendNewPassWord(psw,this.t).subscribe((res) => {
      console.log("new passwd created");
     
      this.router.navigateByUrl("/");
      
    }, (err) => console.log("noooooooooo!"))

  }


}
