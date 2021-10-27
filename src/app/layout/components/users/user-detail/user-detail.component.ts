import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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
  imagePath : string;
  constructor(private route: ActivatedRoute,private userService : UserService) {
    this.username = this.route.snapshot.paramMap.get("id") || "";
    this.user = new UserModel(); 
    this.baseImagePath = environment.baseImagePath;
    this.imagePath = "";
    this.getUserByUsername();
  }

  ngOnInit(): void {
  }
 
  


  getUserByUsername(){
    this.userService.getUserByUserName(this.username).subscribe(response => {
      this.user = response;
      this.imagePath = setImagePath(this.user.imageUrl);
    });
  }
  checkGenderIsMale(gender : string){
      return gender == "male"
  }

}
