import { Component, Input, OnInit, Output } from '@angular/core';
import { carouselService } from '../../services/data-sharing/carousel.service';

@Component({
  selector: 'app-small-image',
  templateUrl: './small-image.component.html',
  styleUrls: ['./small-image.component.css']
})
export class SmallImageComponent implements OnInit {

  @Input() image: string;

  constructor(private profileService : carouselService) { 

  }

  ngOnInit(): void {
  }

  showInCaraousel(image: string) {
    this.profileService.setisSelectedImage(true);
    this.profileService.setselectedImage(image);
  }
  removeFromCarousel(){
    this.profileService.setisSelectedImage(false);
  }

}
