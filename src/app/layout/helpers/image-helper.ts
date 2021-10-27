import { environment } from "src/environments/environment";

let baseImagePath : string = environment.baseImagePath;
let imagePath : string = "";
export function setImagePath(imageUrl : string){
    return imagePath = baseImagePath + imageUrl;
  }