import { UserModel } from "./user.model";

export class UserLikeModel {
    usersLikedMe : UserModel[]
    usersILiked : UserModel[]

    constructor() {
        this.usersLikedMe = []
        this.usersILiked = []
    }
}