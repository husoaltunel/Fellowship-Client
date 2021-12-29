import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  path: string;

  constructor(private http: HttpService) {

    this.path = "Photos/";

  }

  getPhotosByUsername(username: string): Observable<any> {
    return this.http.get(this.path.concat("get-all-by-username/").concat(username))
  }
  getProfilePhotoByUsername(username: string): Observable<any> {
    return this.http.get(this.path.concat("get-profile-photo-by-username/").concat(username))
  }
  uploadPhotos(model: FileList) {
    // const formData = new FormData();
    // formData.append('Image', model.item(0),model[0].name);
    return this.http.post(this.path, model);
  }


}
