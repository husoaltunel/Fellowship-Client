import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageCarouselComponent } from './image-carousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [ImageCarouselComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports:[ImageCarouselComponent]
})
export class ImageCarouselModule { }
