import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { HttpService } from './http.service';
import {map} from 'rxjs/operators'
import { UserAuthModel } from '../models/userAuth.model';
import { setLogingStateToLocalStorage, setUserStateToLocalStorage } from './helpers/loginHelper';
import { RegisterModel } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private path = "Accounts/";
  private user : UserAuthModel;
  constructor(private http: HttpService) {
    this.user = new UserAuthModel();
  }

  login(model: LoginModel) {
    return this.http.post(this.path + "login", model).pipe(
      map((response : any)  => {
        if(response.success){
          this.user = response.data;
          setUserStateToLocalStorage(this.user);
          return response;
        }
      })
    )
  }
  logOut(){
    localStorage.removeItem('user');
    setLogingStateToLocalStorage(false);
  }
  register(model : RegisterModel){
    return this.http.post(this.path + "register",model);
  }
  getUsers(){
    return this.http.get(this.path + "get-users");
  }
}
