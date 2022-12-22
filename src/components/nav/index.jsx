import { NavLink, useHistory } from "react-router-dom";
// import { GiRocketThruster } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import styles from "./navigation.module.css";
import "../nav/nav.css";
import ToggleSwitch from "../toggleSwitch";
import { useContext, useState } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import AuthContext from "../../auth/auth-context";
import Button from "../Button";
import AvatarButton from "../avatarButton";

function Nav() {
    const theme = useContext(ThemeContext);
     const darkMode = theme.darkMode;
     const { isLoggedIn } = useContext(AuthContext);
     let history = useHistory();
     console.log(darkMode);

     const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    return(
        <header>
            <IconContext.Provider value={{ color: "black"}}>
            <nav className="navbar">
                <div className="navbar-container container">
                    {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        <GiRocketThruster className="navbar-icon" />
                        Skye
                    </Link> */}
                    <div className="menu-icon"onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive }) => "nav-links" + (isActive? " activated" : "")}
                            onClick={closeMobileMenu}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive }) => "nav-links" + (isActive? " activated" : "")}
                            onClick={closeMobileMenu}
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/projects" className={({ isActive }) => "nav-links" + (isActive? " activated" : "")}
                            onClick={closeMobileMenu}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive }) => "nav-links" + (isActive? " activated" : "")}
                            onClick={closeMobileMenu}
                            >
                                Contact
                            </NavLink>
                        </li>
                        {/* <li className="nav-item">
                            <ToggleSwitch 
                                
                                isOn={darkMode}
                                handleToggle={() => theme.setDarkMode(!darkMode)}
                                leftAriaLabel="toggle dark mode"
                                leftEmoji={<>🌙</>}
                                rightAriaLabel="toggle light mode"
                                rightEmoji={<>☀️</>}
                            />
                        </li>
                        <li className="nav-item">
                            {isLoggedIn && (
                            <AvatarButton onClick={() => history.push("/profile")} />
                            )}
                            {!isLoggedIn && (
                                <Button 
                                type="login"
                                name="Sign In" 
                                onClick={() => history.push("/login")}></Button>
                            )}
                        </li> */}
                    </ul>
                </div>
                <div>
                <ToggleSwitch 
                    isOn={darkMode}
                    handleToggle={() => theme.setDarkMode(!darkMode)}
                    leftAriaLabel="toggle dark mode"
                    leftEmoji={<>🌙</>}
                    rightAriaLabel="toggle light mode"
                    rightEmoji={<>☀️</>}
                />
                {isLoggedIn && (
                    <AvatarButton onClick={() => history.push("/profile")} />
                )}
                {!isLoggedIn && (
                    <Button 
                    type="login"
                    name="Sign In" 
                    onClick={() => history.push("/login")}></Button>
                )}
               
               
            </div>
            </nav>
            
        </IconContext.Provider>
            
            
        </header>
    );
};

export default Nav