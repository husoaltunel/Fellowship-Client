import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditProfileRoutingModule } from './edit-profile-routing.module';
import { EditProfileComponent } from './edit-profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserDetailSidebarModule } from 'src/app/shared/components/user-detail-sidebar/user-detail-sidebar.module';

import { SmallImageModule } from 'src/app/shared/components/small-image/small-image.module';
import { ImageCarouselModule } from 'src/app/shared/tools/image-carousel/image-carousel.module';


@NgModule({
  declarations: [
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    EditProfileRoutingModule,
    FormsModule,
    UserDetailSidebarModule,
    ImageCarouselModule,
    SmallImageModule
  ]
})
export class EditProfileModule { }
