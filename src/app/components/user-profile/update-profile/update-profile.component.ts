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

    
ngOnInit() {
  this.dataService.getUser().subscribe(dataa=>{
    this.user=dataa; 
    console.log(this.user);
  });
}

  constructor(private dataService:MemberService, private updatef: FormBuilder, private router:Router) {
    this.updateForm = this.updatef.group({
      firstName: new FormControl(this.user.firstName, [
      Validators.required,
      Validators.minLength(2)]),

      lastName: new FormControl(this.user.lastName, [
        Validators.required,
          Validators.minLength(2)
      ]),
      bio: new FormControl(this.user.bio, [
        Validators.required,
          Validators.minLength(2)
      ]),
      url: new FormControl(this.user.url, [
        Validators.required,
          Validators.minLength(2)
      ]),
      tel: new FormControl(this.user.tel, [
        Validators.required,
          Validators.minLength(8)
      ]),
      location: new FormControl(this.user.location, [
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
  
  update(){
    let data = this.updateForm.value;
    const user=new UserProfile(data.firstName,data.lastName,data.bio,data.url,data.tel,data.location,null,null);
    console.log("ff "+JSON.stringify(user));
    this.dataService.update(user).subscribe((res)=>{
      console.log(res);
    }, (err) => console.log(err));
  }



}
