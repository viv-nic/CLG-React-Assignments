import { NavLink } from "react-router-dom"

function Nav() {
    return(
        <header>
            <nav>
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