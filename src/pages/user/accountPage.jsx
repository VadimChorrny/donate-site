import React, { useEffect, useState } from "react";
import UserService from "../../services/userService.js";

export default function AccountPage() {
    const [email, setEmail] = useState("nothing");

    useEffect(() => {
        var mail = UserService.getCurrentUserEmail();
        console.log('My mail: ',mail);
        setEmail(UserService.getCurrentUserEmail());
    });

    return <div>Your email: {email}</div>;
}
