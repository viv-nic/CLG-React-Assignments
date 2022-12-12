import { useContext } from "react";
import AuthContext from "../../auth/auth-context";
import styles from "./AvatarButton.module.css";

const AvatarButton = ({onClick}) => {
    const {name} = useContext(AuthContext);

    return (
        <button 
            style={{
                backgroundImage: `url(https://robohash.org/${name}.png)`
            }}
            className={styles["avatar-button"]}
            onClick={onClick}
        />
    );
};

export default AvatarButton;