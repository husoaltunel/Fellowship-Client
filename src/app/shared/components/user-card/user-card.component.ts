import { Component, Input, OnInit } from '@angular/core';
import { setImagePath } from 'src/app/layout/helpers/image-helper';
import { UserModel } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() user : UserModel
  baseImagePath : string;
  imagePath : string;

  constructor() { 
    this.user = new UserModel();
    this.baseImagePath = environment.baseImagePath
    this.imagePath = ""
  }

  ngOnInit(): void {
    this.imagePath = setImagePath(this.user.imageUrl);
  }

}
