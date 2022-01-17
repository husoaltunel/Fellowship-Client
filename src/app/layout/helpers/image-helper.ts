import { Injectable } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { PhotoModel } from "src/app/shared/models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class ImageHelper {

  constructor(private sanitizer: DomSanitizer) {

  }

  ConvertFileToImage(file: any) {

    let objectURL = `data:${file.contentType};base64,` + file.fileContents;
    return this.sanitizer.bypassSecurityTrustUrl(objectURL);
  }
  ConvertFilesToImages(files: any) {
    let imageUrls: any = []

    files.forEach((file: any) => {

      let objectURL = `data:${file.contentType};base64,` + file.fileContents;
      imageUrls.push(this.sanitizer.bypassSecurityTrustUrl(objectURL));

    })

    return imageUrls;

  }
  setImages(data: any) {
    let images: PhotoModel[] = [];
    let imageFiles: any[] = [];

    data.forEach((photo: any) => {
      imageFiles.push(photo.photoFile);
    });

    let imageUrls = this.ConvertFilesToImages(imageFiles);
    for (let i = 0; i < data.length; i++) {
      images.push({ id: data[i].id, url: imageUrls[i] });
    }
    return images;

  }
  setImage(data: any) {
    let image: PhotoModel;

    let imageUrl = this.ConvertFileToImage(data.photoFile);
    image = { id: data.id, url: imageUrl };

    return image;

  }

}


