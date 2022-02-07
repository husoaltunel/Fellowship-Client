import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListsRoutingModule } from './lists-routing.module';
import { UserCardModule } from 'src/app/shared/components/user-card/user-card.module';
import { ListsComponent } from './lists.component';


@NgModule({
  declarations: [ListsComponent],
  imports: [
    CommonModule,
    ListsRoutingModule,
    UserCardModule
  ]
})
export class ListsModule { }
