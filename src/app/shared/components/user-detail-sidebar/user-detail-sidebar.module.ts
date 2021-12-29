import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailSidebarComponent } from './user-detail-sidebar.component';



@NgModule({
  declarations: [UserDetailSidebarComponent],
  imports: [
    CommonModule
  ],
  exports : [UserDetailSidebarComponent]
})
export class UserDetailSidebarModule { }
