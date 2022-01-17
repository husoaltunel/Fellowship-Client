import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {  ImageHelper } from 'src/app/layout/helpers/image-helper';
import { environment } from 'src/environments/environment';
import { PhotoModel } from '../../models/photo.model';
import { UserModel } from '../../models/user.model';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user: UserModel
  image: PhotoModel;

  constructor(private photoService: PhotoService,private imageHelper : ImageHelper) {
    this.image = new PhotoModel()
  }

  ngOnInit(): void {
    this.getProfilePhotoByUsername();
  }

  getProfilePhotoByUsername() {
    return this.photoService.getProfilePhotoByUsername(this.user.username).subscribe((response: any) => {

      if (response.success) {
        this.image = this.imageHelper.setImage(response.data)
      }

    })

  }

}
