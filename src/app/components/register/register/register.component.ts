import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';
import { RegisterModel } from 'src/app/models/register.model';
import { AccountService } from 'src/app/services/account.service';

import { setLoginInfo } from '../../helpers/registerHelper';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : RegisterModel;
  loginInfo : LoginModel;
  constructor(private accountService : AccountService,private location :Location) {
    this.newUser = new RegisterModel();
    this.loginInfo = new LoginModel();
   }

  ngOnInit(): void {
  }

  register(){
    this.accountService.register(this.newUser).subscribe((response : any)=> {
      if(response.success){
        this.loginInfo = setLoginInfo(this.loginInfo,this.newUser);
        this.accountService.login(this.loginInfo).subscribe();
      }console.log(response);
    })
  }
  cancel(){
    this.location.back();
  }

}
