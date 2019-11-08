import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user:UserProfile=new UserProfile();
  updateForm: FormGroup;
  CurrentUser:UserProfile=new UserProfile();

    
ngOnInit() {
    
    this.dataService.getUser().then(
      res=>{
        res.subscribe(
          rez=>{
            this.CurrentUser=rez; 
            console.log("hjhjg,edhd"+this.CurrentUser.firstName);
          }
        )
      },
      err=>{
      }
    );
    console.log(this.CurrentUser.firstName);

}

  constructor(private dataService:MemberService, private updatef: FormBuilder, private router:Router) {
    
    
    this.updateForm = this.updatef.group({
      firstName: new FormControl(this.user.firstName, [
      Validators.required,
      Validators.minLength(2)]),

      lastName: new FormControl(this.CurrentUser.lastName, [
        Validators.required,
          Validators.minLength(2)
      ]),
      bio: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      url: new FormControl("", [
        Validators.required,
        Validators.minLength(2)
      ]),
      tel: new FormControl("", [
        Validators.required,
          Validators.minLength(8)
      ]),
      location: new FormControl("", [
        Validators.required,
          Validators.minLength(2)
      ])

    });

  
  }


  get firstName() {
    return this.updateForm.get('firstName');
  }
  get lastName() {
    return this.updateForm.get('lastName');
  }

  get tel() {
    return this.updateForm.get('tel');
  }
  get location() {
    return this.updateForm.get('location');
  }
  get url() {
    return this.updateForm.get('url');
  }
  get bio() {
    return this.updateForm.get('bio');
  }
  
  // set bio(v : any) {
  //   console.log("bio form"+this.bio);
  //   console.log("bio user"+this.user.bio);
  //   console.log("bio user"+v);
  //   this.bio = this.user.bio;
    
  // }
  
  
  update(){
    this.ngOnInit();
    // this.updateForm.value.firstName=this.user.firstName;
    // this.updateForm.value.firstName=this.user.lastName;
    // this.updateForm.value.firstName=this.user.bio;
    let data = this.updateForm.value;
    const user=new UserProfile(data.firstName,data.lastName,null,data.bio,data.tel,data.location,data.url);
    console.log("ff "+JSON.stringify(user));
    this.dataService.update(user).subscribe((res)=>{
      console.log(res);
    }, (err) => console.log(err));
  }



}
