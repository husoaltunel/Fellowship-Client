import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SmallImageComponent } from './small-image.component';



@NgModule({
  declarations: [SmallImageComponent],
  imports: [
    CommonModule
  ],
  exports:[SmallImageComponent]
})
export class SmallImageModule { }
