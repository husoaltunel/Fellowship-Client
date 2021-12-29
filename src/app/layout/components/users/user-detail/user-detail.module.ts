import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDetailRoutingModule } from './user-detail-routing.module';
import { ImageCarouselModule } from 'src/app/shared/tools/image-carousel/image-carousel.module';
import { UserDetailSidebarModule } from 'src/app/shared/components/user-detail-sidebar/user-detail-sidebar.module';
import { UserDetailSidebarComponent } from 'src/app/shared/components/user-detail-sidebar/user-detail-sidebar.component';
import { SmallImageModule } from 'src/app/shared/components/small-image/small-image.module';
import { UserDetailComponent } from './user-detail.component';








@NgModule({
  declarations: [
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    UserDetailRoutingModule,
    ImageCarouselModule,
    UserDetailSidebarModule,
    SmallImageModule
  ]
})
export class UserDetailModule { }
