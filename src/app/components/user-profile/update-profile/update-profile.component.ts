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
  user:UserProfile;
  updateform: FormGroup;

  
  constructor(private dataService:MemberService, private updatef: FormBuilder, private router:Router) {
    this.updateform = updatef.group({
      firstName: new FormControl("", [
      Validators.required,
      Validators.minLength(2)]),

      lastName: new FormControl("", [
        Validators.required,
          Validators.minLength(2)
      ]),
      bio: new FormControl("", [
        Validators.required,
          Validators.minLength(2)
      ]),
      img: new FormControl("", [
        Validators.required
            ]),
      phone: new FormControl("", [
        Validators.required,
          Validators.minLength(8)
      ])

    });
  }
  get img() {
    return this.updateform.get('img');
  }

  get firstName() {
    return this.updateform.get('firstName');
  }
  get lastName() {
    return this.updateform.get('lastName');
  }

  get phone() {
    return this.updateform.get('phone');
  }
  get bio() {
    return this.updateform.get('bio');
  }
  update(){
    let data = this.updateform.value;
    const user=new UserProfile(data.firstName,data.lastName,data.img,data.bio,data.phone);
    console.log(user);
    this.dataService.update(user).subscribe((res)=>{
      console.log(res);
    }, (err) => console.log(err));
  }
  ngOnInit() {
    return this.dataService.getUser().subscribe(data=>{
      this.user=data;
      console.log(this.user);
    })
  }


}
