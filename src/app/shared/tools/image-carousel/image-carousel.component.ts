import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { PhotoModel } from '../../models/photo.model';
import { carouselService } from '../../services/data-sharing/carousel.service';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {

  @Input() images : PhotoModel[];
  @Input() width : number;
  @Input() height : number;
  
  isSelectedImage : boolean;
  selectedImage : PhotoModel;
  constructor(private profileService : carouselService) {
    this.images = [];
    this.width = 0;
    this.height = 0;
   }

  ngOnInit(): void {
    this.profileService.isSelectedImage.subscribe(response =>{
      this.isSelectedImage = response;
    })
    this.profileService.selectedImage.subscribe(response => {
      this.selectedImage = response;
    })
  }

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: any;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
}
