import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.css']
})
export class CreateProfileComponent implements OnInit {
  firstFormGroup: FormGroup;
  userProfile: UserProfile;
  constructor(private _formBuilder: FormBuilder, private memberService: MemberService) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: [this.userProfile.firstName, Validators.required],
      lastName: [this.userProfile.lastName, Validators.required],
      location: [this.userProfile.location, Validators.required],
      phone: [this.userProfile.tel, Validators.required],
      bio: [this.userProfile.bio, Validators.required],
    });
  }

  createProfile() {
    this.memberService.update(this.userProfile).subscribe(res => {
      console.log(res);
    }, (err) => {
      console.dir(err);
    }
    )
  }

}
