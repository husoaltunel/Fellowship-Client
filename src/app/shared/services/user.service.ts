import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { getCurrentUsernameFromLocalStorage } from './helpers/local-storage-helper';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private path: string;

  constructor(private http: HttpService) {
    this.path = "Users/";
  }

  getUsers() : Observable<any>{
    return this.http.get(this.path);
  }
  getUserByUserName(username : string) : Observable<any>{
    return this.http.get(this.path.concat(`get-user-by-username/${username}`));
  }
  updateUser(user : UserModel): Observable<any>{
    return this.http.put(this.path,user);
  }


}
