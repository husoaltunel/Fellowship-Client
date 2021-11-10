import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { EditProfileComponent } from '../layout/components/edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedChangesGuard implements CanDeactivate<unknown> {
  canDeactivate(component: EditProfileComponent): boolean {

    if(component.editForm.dirty && !component.editForm.submitted){
      return window.confirm("You have not saved changes.Are you sure for exit?")
    }
    return true;
  }

}
