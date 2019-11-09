import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { UserProfile } from 'src/app/models/UserProfile';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Media } from 'src/app/models/Media';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  user:UserProfile=new UserProfile();
  updateForm: FormGroup;
  updatePictureForm: FormGroup;
  profilePicture:Media;
  constructor(private dataService:MemberService, private updatef: FormBuilder, private router:Router,private toastrService:ToastrService) {
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
    this.updatePictureForm=updatef.group({
      picture:new FormControl(null,[Validators.required])
    });
  }
  
  
  ngOnInit() {

    this.profilePicture=new Media(null,"");
      this.dataService.userProfile.subscribe(userProfile=>this.user=userProfile);
      this.updateForm.setValue({
        firstName:this.user.firstName,
        lastName:this.user.lastName,
        bio:this.user.bio,
        url:this.user.url,
        tel:this.user.tel,
        location:this.user.location
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
  
  
  get picture(){
    return this.updatePictureForm.get('picture');
  }
  
  update(){
    
    
    let data = this.updateForm.value;
    const user=new UserProfile(data.firstName,data.lastName,null,data.bio,data.tel,data.location,data.url);
    this.dataService.update(user).subscribe((res)=>{
    }, (err) => console.log(err));
  }

  updatePhoto(){
    this.dataService.updateProfilePicture(this.profilePicture).subscribe(
      res=>{
        this.dataService.getUser().subscribe(
          rez=>{
            this.dataService.updateUserProfile(rez);
          }
          ,err=>console.log(err)
        );
      },
      error=>console.log(error)
    );

  }

  getImageFromInput(event) {
    if(new String(event.target.files[0].type).search("image/"))
    {  
      this.profilePicture.file= event.target.files[0];
      this.profilePicture.type= event.target.files[0].type;
    }
    this.toastrService.error("Error","image filed");
  }



}
