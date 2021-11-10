import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { UserModel } from 'src/app/models/user.model';
import { getCurrentUsernameFromLocalStorage } from 'src/app/services/helpers/local-storage-helper';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { setImagePath } from '../../helpers/image-helper';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('editForm') editForm : NgForm;
  @HostListener('window:beforeunload',['$event']) unloadHandler($event:any){
    if(this.editForm.dirty && !this.editForm.submitted){
      $event.returnValue = "You have not saved changes.Are you sure for exit?";
    }
  }
  username: string;
  user: UserModel;
  baseImagePath: string = environment.baseImagePath;
  profileImagePath: string;
  constructor(private userService: UserService,private sweetAlertService : SweetAlertService) {
    this.username = this.getUsername();
    this.getUser();
  }

  ngOnInit(): void {
  }


  getUsername(): string {
    return getCurrentUsernameFromLocalStorage();
  }
  getUser() {
    this.userService.getUserByUserName(this.username).subscribe(response => {
      this.user = response;
      this.profileImagePath = setImagePath(this.user.imageUrl);
    })
  }
  checkGenderIsMale(gender: string) {
    return gender == "male"
  }
  updateUser() {
    this.userService.updateUser(this.user).subscribe(response => {
      if(response.success){
        this.sweetAlertService.success("Changes are saved")
        console.log(this.editForm);
      }
    })
  }


}
