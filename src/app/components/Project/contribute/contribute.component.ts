import { Component, OnInit } from '@angular/core';
import {ProjectService} from './../../../services/project.service'
@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})
export class ContributeComponent implements OnInit {

  data :any;

  constructor(private ps:ProjectService) { }

 async  ngOnInit():Promise<void> {

    await this.ps.viewUnfinishedProject().toPromise().then((res)=>{

      console.dir(res.data[0]);
      this.data=res.data[0];
      
  
      },(err)=>{
        console.log(err);
        
      });

  }



  public isJustPinterestProj(data) {
    return data.targetedCriterias && data.targetedCriterias.targetedPlatforms.length == 1 && data.targetedCriterias.targetedPlatforms[0] == 'Pinterest';
  }
  
  public isJustFacebookProj(data) {
    return data.targetedCriterias && data.targetedCriterias.targetedPlatforms.length == 1 && data.targetedCriterias.targetedPlatforms[0] == 'Facebook';
  }
  
  public isJustInstagramProj(data) {
    return data.targetedCriterias && data.targetedCriterias.targetedPlatforms.length == 1 && data.targetedCriterias.targetedPlatforms[0] == 'Instagram';
  }

  public isJustTikTokProj(data) {
    return data.targetedCriterias && data.targetedCriterias.targetedPlatforms.length == 1 && data.targetedCriterias.targetedPlatforms[0] == 'TikTok';
  }

  public isJustTwitterProj(data) {
    return data.targetedCriterias && data.targetedCriterias.targetedPlatforms.length == 1 && data.targetedCriterias.targetedPlatforms[0] == 'Twitter';
  }

  public isMultiPlatformesProj(data) {
    return data.targetedCriterias && data.targetedCriterias.targetedPlatforms.length != 1;
  }

  public isNotDefPlatformesProj(data) {
    return !data.targetedCriterias || data.targetedCriterias.targetedPlatforms.length <= 0;
  }


 /* this.ps.viewProjectById().subscribe((res)=>{

    console.dir(res.data[0]);
    this.data=res.data[0];
    

    },(err)=>{
      console.log(err);
      
    });*/

}


