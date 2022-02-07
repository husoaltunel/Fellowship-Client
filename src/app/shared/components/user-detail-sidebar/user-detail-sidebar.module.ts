import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailSidebarComponent } from './user-detail-sidebar.component';
import { TimeAgoPipeModuleModule } from '../../pipes/time-ago-pipe-module.module';



@NgModule({
  declarations: [UserDetailSidebarComponent],
  imports: [
    CommonModule,
    TimeAgoPipeModuleModule
  ],
  exports : [UserDetailSidebarComponent]
})
export class UserDetailSidebarModule { }
