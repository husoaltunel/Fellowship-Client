import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageHelper } from 'src/app/layout/helpers/image-helper';
import { UserModel } from 'src/app/shared/models/user.model';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { UserService } from 'src/app/shared/services/user.service';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  username: string;
  user : UserModel;
  profileImagePath : any;
  images : string[];

  constructor(private route: ActivatedRoute,private userService : UserService,private photoService : PhotoService,private imageHelper : ImageHelper) {
    this.username = this.route.snapshot.paramMap.get("id") || "";
    this.user = new UserModel(); 
    this.profileImagePath = "";
    this.getUserByUsername();
    this.getPhotos();
  }

  ngOnInit(): void {
  }
 

  getUserByUsername(){
    this.userService.getUserByUserName(this.username).subscribe((response : any) => {
      if(response.success){
          this.user = response.data;
          this.getProfilePhotoByUsername();
      }   
    });
  }
  getPhotos(){
    this.photoService.getPhotosByUsername(this.username).subscribe(response => {
      if(response.success){
        this.images = this.imageHelper.ConvertFilesToImages(response.data);
      }
    })
  }
  getProfilePhotoByUsername() {
    return this.photoService.getProfilePhotoByUsername(this.user.username).subscribe(response => {
      if (response.success) {
        this.profileImagePath = this.imageHelper.ConvertFileToImage(response.data);
      }

    })
  }

}
