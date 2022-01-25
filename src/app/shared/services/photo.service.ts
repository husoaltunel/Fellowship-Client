import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  path: string;

  constructor(private http: HttpService,httpClient : HttpClient) {

    this.path = "Photos/";

  }

  getPhotosByUsername(username: string): Observable<any> {
    return this.http.get(this.path.concat("get-all-by-username/").concat(username))
  }
  getProfilePhotoByUsername(username: string): Observable<any> {
    return this.http.get(this.path.concat("get-profile-photo-by-username/").concat(username))
  }
  uploadPhotos(model: FileList) {
    const formData = new FormData();
    for(let i = 0;i < model.length;i++){
      formData.append(model[i].name,model[i]);
    }
    
    return this.http.post(this.path, formData);
  }
  deletePhotoById(id : number) : Observable<any>{
    return this.http.delete(this.path,id)
  }
  setProfilePhoto(id : number){
    return this.http.put(this.path.concat(id.toString()),{});
  }

}
