import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {  ImageHelper } from 'src/app/layout/helpers/image-helper';
import { environment } from 'src/environments/environment';
import { PhotoModel } from '../../models/photo.model';
import { UserModel } from '../../models/user.model';
import { PhotoService } from '../../services/photo.service';
import { SweetAlertService } from '../../services/sweet-alert.service';
import { UserLikeService } from '../../services/user-like.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserModel
  image: PhotoModel;
  liked : boolean;

  constructor(private router : Router,private photoService: PhotoService,private imageHelper : ImageHelper,private userLikeService : UserLikeService,private sweetAlertService : SweetAlertService) {
    this.image = new PhotoModel()
  }

  ngOnInit(): void {
    this.getProfilePhotoByUsername();
    this.doILikeTheUser();
  }


  getProfilePhotoByUsername() {
    return this.photoService.getProfilePhotoByUsername(this.user.username).subscribe((response: any) => {

      if (response.success) {
        this.image = this.imageHelper.setImage(response.data)
      }

    })

  }
  likeUser(user : UserModel){
    this.userLikeService.insertUserLike(user.id).subscribe(response => {
      if(response.success){
        this.sweetAlertService.success("You liked " + user.knownAs);
        this.doILikeTheUser();
      }
      else{
        this.unlikeUser();
      }
      this.reloadCurrentRoute()
    })
  }
  reloadCurrentRoute() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.router.navigate([currentUrl]);
        console.log(currentUrl);
    });
  }

  doILikeTheUser(){
    this.userLikeService.doILikeTheUser(this.user.id).subscribe(response => {
      if(response.success){
        this.liked = true
      }
      else{
        this.liked = false
      }
    })
  }
  unlikeUser(){
    this.userLikeService.deleteUserLike(this.user.id).subscribe(response => {
      if(response.success){
        this.sweetAlertService.success("You unliked " + this.user.knownAs);
      }
    });
  }

}
