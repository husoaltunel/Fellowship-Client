import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.model';
import { AccountService } from 'src/app/services/account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginInfo : LoginModel;
  loggedIn : boolean = false;
  constructor(private accountService : AccountService,private router : Router) { 
    this.loginInfo = new LoginModel();
    this.loggedIn = this.getLoginState();
  }

  ngOnInit(): void {
  }
  getLoginState(){
     return JSON.parse(localStorage.getItem("loggedIn") || "false")
  }
  login(){
    this.accountService.login(this.loginInfo).subscribe((response : any) => {
      if(response.success){
        this.loggedIn = true;
        // this.router.navigate(["/home"])
      }
           
    });;
  }
  logOut(){
    this.accountService.logOut();
    this.loggedIn = false;
    this.router.navigate([""])
  }

}
