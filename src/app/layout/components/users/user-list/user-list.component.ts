import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserModel } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users : Observable<UserModel[]>;

  constructor(private userService : UserService) { 
    this.users = this.getUsers(); 
  }

  ngOnInit(): void {
  }

  getUsers() : Observable<UserModel[]> {
    return this.userService.getUsers().pipe(
      map(response =>response.data)
    );;
  }
}
