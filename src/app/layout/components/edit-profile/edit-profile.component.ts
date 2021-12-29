import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/shared/models/user.model';
import { getCurrentUsernameFromLocalStorage } from 'src/app/shared/services/helpers/local-storage-helper';
import { PhotoService } from 'src/app/shared/services/photo.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';
import { UserService } from 'src/app/shared/services/user.service';
import { ImageHelper } from '../../helpers/image-helper';
import { UsersHelper } from '../../helpers/users-helper';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('editForm') editForm: NgForm;
  @HostListener('window:beforeunload', ['$event']) unloadHandler($event: any) {
    if (this.editForm.dirty && !this.editForm.submitted) {
      $event.returnValue = "You have not saved changes.Are you sure for exit?";
    }
  }
  username: string;
  user: UserModel;
  images : string[];
  profileImagePath: any;
  constructor(private userService: UserService, private sweetAlertService: SweetAlertService, private photoService: PhotoService,private imageHelper : ImageHelper,public usersHelper : UsersHelper) {
    this.username = this.getUsername();
    this.getUser();
    this.getPhotos();
  }

  ngOnInit(): void {
  }


  getUsername(): string {
    return getCurrentUsernameFromLocalStorage();
  }
  getUser() {
    this.userService.getUserByUserName(this.username).subscribe((response: any) => {
      if (response.success) {
        this.user = response.data;
        this.getProfilePhotoByUsername();
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
  getPhotos(){
    this.photoService.getPhotosByUsername(this.username).subscribe(response => {
      if(response.success){
        this.images = this.imageHelper.ConvertFilesToImages(response.data);
      }
    })
  }
  
  updateUser() {
    this.userService.updateUser(this.user).subscribe(response => {
      if (response.success) {
        this.sweetAlertService.success("Changes are saved")
        console.log(this.editForm);
      }
    })
  }

  upload(event : any){
    if(event.target.files){
      console.log(typeof(event.target.files))
      this.photoService.uploadPhotos(event.target.files).subscribe(response => {console.log(response)});
    }
  }


}
