import jwt_decode from "jwt-decode";

export class UserService {
    static getCurrentUserId() {
        var accessToken = localStorage.getItem("accessToken");
        var token = jwt_decode(accessToken);
        return token.Id;
    }

    static getCurrentUserEmail() {
        var accessToken = localStorage.getItem("accessToken");
        var token = jwt_decode(accessToken);
        console.log('token ',token);
        return token.Email;
    }
}

export default UserService;
