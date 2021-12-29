import { PhotoModel } from "./photo.model";

export class UserModel {
    username: string;
    imageUrl : string;
    email: string;
    dateOfBirth: any;
    age: string;
    gender: string;
    country: string;
    city: string;
    knownAs: string;
    introduction: string; 
    created: any;
    lastActive: any;
    lookingFor: string;
    interests: string;
    photos: PhotoModel[];

    constructor() {
        this.username = ""
        this.email = ""
        this.imageUrl = ""
        this.dateOfBirth = null
        this.age = ""
        this.gender = ""
        this.country = ""
        this.city = ""
        this.knownAs = ""
        this.introduction = ""
        this.created = null
        this.lastActive = null
        this.lookingFor = ""
        this.interests = ""
        this.photos = []
    }
    
}