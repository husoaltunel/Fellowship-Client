import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class carouselService {

  private isSelectedImage$ : BehaviorSubject<boolean>;
  private selectedImage$ : BehaviorSubject<string>;
  isSelectedImage : Observable<boolean>;
  selectedImage : Observable<string>

  constructor() {
    this.isSelectedImage$ = new BehaviorSubject<boolean>(false)
    this.selectedImage$ = new BehaviorSubject<string>("");
    this.isSelectedImage = this.isSelectedImage$.asObservable();
    this.selectedImage = this.selectedImage$.asObservable();
   }

   setisSelectedImage(isSelected : boolean){
     this.isSelectedImage$.next(isSelected);
   }
   setselectedImage(image : string){
    this.selectedImage$.next(image);
   }
}
