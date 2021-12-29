import { LoginModel } from "src/app/shared/models/login.model";
import { RegisterModel } from "src/app/shared/models/register.model";


export function setLoginInfo(loginInfo : LoginModel, newUser : RegisterModel){
    loginInfo.username = newUser.username;
    loginInfo.password = newUser.password;
    return loginInfo;
}