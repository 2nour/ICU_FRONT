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
  updatePhotoForm:FormGroup;
  constructor(private dataService:MemberService, private updatef: FormBuilder, private router:Router) {
    this.updateForm=this.updatef.group({
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

    this.updatePhotoForm=this.updatef.group({
      image: new FormControl(null, [Validators.required])
    });
  }
  
  ngOnInit() {
    this.dataService.getUser().subscribe(rez=>{
      this.user=rez;
      this.updateForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        bio:this.user.bio,
        url:this.user.url,
        tel:this.user.tel,
        location:this.user.location
      });
    },(error) => { console.log(error);});

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
  
  get image(){
    return this.updatePhotoForm.get('image');
  }
  
  
  update(){
    
    
    let data = this.updateForm.value;
    const user=new UserProfile(data.firstName,data.lastName,null,data.bio,data.tel,data.location,data.url);
    this.dataService.update(user).subscribe((res)=>{
    }, (err) => console.log(err));
  }

  updatePhoto(){
    
    console.log(this.updatePhotoForm.value.image);
    this.dataService.updateProfilePicture(this.updatePhotoForm.value.image).subscribe(
      res=>{},
      error=>console.log(error)
    );

  }

  getImageFromInput(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.updatePhotoForm.patchValue({
      image: file
    });

  }



}
