import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthMessages } from 'src/app/constants/auth-messages';
import { LoginModel } from 'src/app/models/login.model';
import { AuthService } from 'src/app/services/auth.service';
import { getCurrentUsernameFromLocalStorage, getLoginStateFromLocalStorage, setLoginStateToLocalStorage } from 'src/app/services/helpers/local-storage-helper';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loginInfo: LoginModel;
  loggedIn: boolean;

  constructor(private authService: AuthService,private userService : UserService, private router: Router, private sweetAlertService: SweetAlertService) {
    this.loginInfo = new LoginModel();
    this.setLoggedIn();
    this.loggedIn = this.getLoggedIn();
  }

  ngOnInit(): void {
  }

  setLoggedIn() {
    this.authService.isLoggedIn().subscribe(response => {
      this.loggedIn = true;
      setLoginStateToLocalStorage(true);
    },error => {
      this.loggedIn = false;
      setLoginStateToLocalStorage(false);
    });
  }
  getLoggedIn(){
    return getLoginStateFromLocalStorage();
  }
  login() {
    this.authService.login(this.loginInfo).subscribe((response: any) => {
      if (response.success) {
        this.loggedIn = true;
        this.router.navigateByUrl("/user-list")
        this.sweetAlertService.success(response.message);
      }
      else {
        this.router.navigateByUrl("/home")
        this.sweetAlertService.error(response.message)
      }

    });
    
  }
  logOut() {
    this.authService.logOut();
    this.setLoggedIn();
    this.sweetAlertService.warning(AuthMessages.logout);
    this.router.navigateByUrl("/")
  }
  getCurrentUsername() :string{
    return  getCurrentUsernameFromLocalStorage();
  }
}
