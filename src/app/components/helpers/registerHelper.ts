import { LoginModel } from "src/app/models/login.model";
import { RegisterModel } from "src/app/models/register.model";

export function setLoginInfo(loginInfo : LoginModel, newUser : RegisterModel){
    loginInfo.username = newUser.username;
    loginInfo.password = newUser.password;
    return loginInfo;
}