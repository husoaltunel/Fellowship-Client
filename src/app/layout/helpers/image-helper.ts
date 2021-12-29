import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class ImageHelper {

  constructor(private sanitizer: DomSanitizer) {

  }

  ConvertFileToImage(data: any) {
    
    let objectURL = `data:${data.fileType};base64,` + data.fileContents;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  ConvertFilesToImages(files: any) {
    let imageUrls: any = []

    files.forEach((file : any) => {

      let objectURL = 'data:image/jpeg;base64,' + file.fileContents;
      imageUrls.push(this.sanitizer.bypassSecurityTrustUrl(objectURL));

    })

    return imageUrls;

  }

}


