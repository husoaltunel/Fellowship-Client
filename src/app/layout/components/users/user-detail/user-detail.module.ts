import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { UserDetailComponent } from './user-detail.component';
import { ImageCarouselModule } from 'src/app/shared/tools/image-carousel/image-carousel.module';






@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    ImageCarouselModule
  ]
})
export class UserDetailModule { }
