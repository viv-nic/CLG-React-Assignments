import { useContext } from "react";
import AuthContext from "../auth/auth-context";
import Button from "../components/Button";
import React from "react";

const Profile = () => {
    const {onLogout, name, email} = useContext(AuthContext);

    return (
        <section>
            <h1>User Settings</h1>
            <h2>{name}</h2>
            <p>{email}</p>
            <Button name="Sign Out" onClick={onLogout}/>
        </section>
    );
};

export default Profile;