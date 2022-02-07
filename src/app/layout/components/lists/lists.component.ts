import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserLikeService } from 'src/app/shared/services/user-like.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  usersILiked: UserModel[];
  usersLikedMe: UserModel[];

  constructor(private userService: UserService, private userLikeService: UserLikeService) {
    this.getUserLikes();
  }

  ngOnInit(): void {
  }

  getUserLikes() {
    this.userLikeService.getUserLikes().subscribe(response => {
      if (response.success) {
        this.usersILiked = response.data.usersILiked
        this.usersLikedMe = response.data.usersLikedMe
      }
    })
  }

}
