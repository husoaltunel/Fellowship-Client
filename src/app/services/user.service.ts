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

  getUsers() : Observable<UserModel[]>{
    return this.http.get(this.path + "get-users").pipe(
      map(response =>{
        return response.data
      })
    );
  }
  getUserByUserName(username : string) : Observable<UserModel>{
    return this.http.get(this.path + `get-user-by-username/${username}`).pipe(
      map(response => {
       return response.data
      })
    )
  }
}
