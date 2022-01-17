import { Component, Input, OnInit } from '@angular/core';
import { UsersHelper } from 'src/app/layout/helpers/users-helper';
import { PhotoModel } from '../../models/photo.model';
import { UserModel } from '../../models/user.model';

@Component({
  selector: 'app-user-detail-sidebar',
  templateUrl: './user-detail-sidebar.component.html',
  styleUrls: ['./user-detail-sidebar.component.css']
})
export class UserDetailSidebarComponent implements OnInit {

  @Input() user : UserModel;
  @Input() profileImagePath : PhotoModel;

  constructor(public usersHelper : UsersHelper) {
   
   }

  ngOnInit(): void {
  }

}
