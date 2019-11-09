import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MemberService } from "./../../../services/member.service"
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {


  newPassForm: FormGroup;
  t:String;

  constructor(private ms: MemberService, private tosterService:ToastrService,private resetForm: FormBuilder, private router: Router,private actRout:ActivatedRoute) {

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

 async ngOnInit():Promise<void> {

    this.actRout.paramMap.subscribe(params => {
      this.t = params.get("RestToken")
      })
       await this.ms.checkNewPasswordrequest(this.t).toPromise().then((res) => {
        }).catch(err=> {
          
          this.tosterService.error("This activation token is invalid.","error");

          this.router.navigateByUrl("/");
      })
    
    
  }

  send() {
    let psw = this.newPassForm.value.password;
    this.ms.SendNewPassWord(psw,this.t).subscribe((res) => {
      console.log("new passwd created");
     
      this.router.navigateByUrl("/");
      
    }, (err) => console.log("noooooooooo!"))

  }


}
