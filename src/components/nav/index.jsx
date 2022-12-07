import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";
import ToggleSwitch from "../toggleSwitch";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";

function Nav() {
    const theme = useContext(ThemeContext);
     const darkMode = theme.darkMode;
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
            />
        </header>
    );
};

export default Nav