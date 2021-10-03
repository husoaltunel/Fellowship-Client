import { UserAuthModel } from "src/app/models/userAuth.model";

export function setUserStateToLocalStorage(user : UserAuthModel){
    localStorage.setItem("user",JSON.stringify(user));
    setLogingStateToLocalStorage(true)
}
export function setLogingStateToLocalStorage(state : boolean){
    localStorage.setItem("loggedIn",JSON.stringify(state));
}