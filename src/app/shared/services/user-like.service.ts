import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserLikeService {

  private path: string = "UserLikes/"

  constructor(private http: HttpService) { }

  insertUserLike(acclaimedUserId: number) {
    return this.http.post(`${this.path}${acclaimedUserId.toString()}`, {});
  }

  getUserLikes() {
    return this.http.get(this.path);
  }

  doILikeTheUser(userId : number){
    return this.http.get(this.path.concat(userId.toString()))
  }

  deleteUserLike(id : number){
    return this.http.delete(this.path,id)
  }
}
