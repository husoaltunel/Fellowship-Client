class accessToken {
    constructor(){
        this.token = "";
        this.expiration = ""
    }
    token : string;
    expiration : string;
}

export class UserAuthModel {
    username: string;
    accessToken: accessToken;
    constructor() {
        this.username = "";
        this.accessToken = new accessToken()
    }
}

