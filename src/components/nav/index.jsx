import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

function Nav() {
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
        </header>
    )
}

export default Nav