import { Component, Input, OnInit, Output } from '@angular/core';
import { carouselService } from '../../services/data-sharing/carousel.service';
import { PhotoModel } from 'src/app/shared/models/photo.model';
@Component({
  selector: 'app-small-image',
  templateUrl: './small-image.component.html',
  styleUrls: ['./small-image.component.css']
})
export class SmallImageComponent implements OnInit {

  @Input() image: PhotoModel;

  constructor(private profileService : carouselService) { 

  }

  ngOnInit(): void {
  }

  showInCaraousel(image: PhotoModel) {
    this.profileService.setisSelectedImage(true);
    this.profileService.setselectedImage(image);
  }
  removeFromCarousel(){
    this.profileService.setisSelectedImage(false);
  }

}
