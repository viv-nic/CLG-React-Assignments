import { NavLink } from "react-router-dom";
import "./navigation.css";

function Nav() {
    return(
        <header>
            <nav className="navigation">
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            Projects
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav