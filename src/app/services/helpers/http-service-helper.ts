import { HttpHeaders } from "@angular/common/http";
import { LoginInfoModel } from "src/app/models/loginInfo.model";
import { getUserStateFromLocalStorage } from "./local-storage-helper";


export function getHttpOptions() {
    let loginInfo : LoginInfoModel = getUserStateFromLocalStorage(); 
    return {
        headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${loginInfo.accessToken.token}` })
    }
}