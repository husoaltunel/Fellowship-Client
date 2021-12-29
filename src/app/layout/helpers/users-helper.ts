import { Injectable } from "@angular/core";

@Injectable({
  providedIn : "root"
})
export class UsersHelper {

  checkGenderIsMale(gender: string) {
    return gender == "male"
  }
}