import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UnsavedChangesGuard } from 'src/app/guards/unsaved-changes.guard';
import { EditProfileComponent } from './edit-profile.component';

const routes: Routes = [
  {path : "" , component : EditProfileComponent,canDeactivate:[UnsavedChangesGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditProfileRoutingModule { }
