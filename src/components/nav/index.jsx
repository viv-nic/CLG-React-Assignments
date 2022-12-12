import { NavLink, useHistory } from "react-router-dom";
import styles from "./navigation.module.css";
import ToggleSwitch from "../toggleSwitch";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import AuthContext from "../../auth/auth-context";
import Button from "../Button";

function Nav() {
    const theme = useContext(ThemeContext);
     const darkMode = theme.darkMode;
     const { isLoggedIn } = useContext(AuthContext);
     let history = useHistory();
     console.log(darkMode);

    return(
        <header>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink exact activeClassName={styles.active} to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={styles.active} to="/contact">
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <ToggleSwitch 
                isOn={darkMode}
                handleToggle={() => theme.setDarkMode(!darkMode)}
                leftAriaLabel="toggle dark mode"
                leftEmoji={<>🌙</>}
                rightAriaLabel="toggle light mode"
                rightEmoji={<>☀️</>}
            />
            {!isLoggedIn && (
                <Button name="Sign In" onClick={() => history.push("/login")} />
            )}
            {isLoggedIn && (
                <Button name="Settings" onClick={() => history.push("/profile")} />
            )}
            
        </header>
    );
};

export default Nav