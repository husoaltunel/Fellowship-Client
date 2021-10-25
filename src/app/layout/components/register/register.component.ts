import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { mergeMap } from 'rxjs/operators';
import { LoginModel } from 'src/app/models/login.model';
import { RegisterModel } from 'src/app/models/register.model';
import { AuthService } from 'src/app/services/auth.service';
import { setLoginInfo } from '../helpers/registerHelper';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser: RegisterModel;
  loginInfo: LoginModel;
  constructor(private authService: AuthService, private location: Location, private router: Router) {
    this.newUser = new RegisterModel();
    this.loginInfo = new LoginModel();
  }

  ngOnInit(): void {
  }

  register() {
    // this.authService.register(this.newUser).subscribe((response: any) => {
    //   if (response.success) {
    //     this.loginInfo = setLoginInfo(this.loginInfo, this.newUser);
    //     this.authService.login(this.loginInfo).subscribe(response => {
    //       this.router.navigateByUrl("/");
    //     });
    //   }
    // })

    this.authService.register(this.newUser).pipe(
      mergeMap(
        (response: any) => {
          if (response.success) {
            this.loginInfo = setLoginInfo(this.loginInfo, this.newUser);
            return this.authService.login(this.loginInfo);
          }
          return response;
        }
      )
    ).subscribe(response => {
      this.router.navigateByUrl("/");
    })

  }
  cancel() {
    this.location.back();
  }

}
