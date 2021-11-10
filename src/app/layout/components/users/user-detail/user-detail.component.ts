import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { setImagePath } from 'src/app/layout/helpers/image-helper';
import { UserModel } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  username: string;
  user : UserModel;
  baseImagePath : string;
  profileImagePath : string;
  images : string[];
  constructor(private route: ActivatedRoute,private userService : UserService) {
    this.username = this.route.snapshot.paramMap.get("id") || "";
    this.user = new UserModel(); 
    this.baseImagePath = environment.baseImagePath;
    this.profileImagePath = "";
    this.getUserByUsername();
    this.images = [];
  }

  ngOnInit(): void {
  }
 

  getUserByUsername(){
    this.userService.getUserByUserName(this.username).subscribe(response => {
      this.user = response;
      this.profileImagePath = setImagePath(this.user.imageUrl);
      this.images = [62, 83, 466, 965, 982, 1043, 738].map((n) => `${this.baseImagePath + this.user.imageUrl}`)
    });
  }
  checkGenderIsMale(gender : string){
      return gender == "male"
  }

}
