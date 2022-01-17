import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { PhotoModel } from '../../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class carouselService {

  private isSelectedImage$ : BehaviorSubject<boolean>;
  private selectedImage$ : BehaviorSubject<PhotoModel>;
  isSelectedImage : Observable<boolean>;
  selectedImage : Observable<PhotoModel>

  constructor() {
    this.isSelectedImage$ = new BehaviorSubject<boolean>(false)
    this.selectedImage$ = new BehaviorSubject<PhotoModel>(new PhotoModel());
    this.isSelectedImage = this.isSelectedImage$.asObservable();
    this.selectedImage = this.selectedImage$.asObservable();
   }

   setisSelectedImage(isSelected : boolean){
     this.isSelectedImage$.next(isSelected);
   }
   setselectedImage(image : PhotoModel){
    this.selectedImage$.next(image);
   }
}
