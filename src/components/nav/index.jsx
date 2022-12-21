import { useHistory, Link } from "react-router-dom";
import { FiMenu, FiX } from 'react-icons/fi'; 
import styles from "./navigation.module.css";
import ToggleSwitch from "../toggleSwitch";
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeProvider";
import AuthContext from "../../auth/auth-context";
import Button from "../Button";
import AvatarButton from "../avatarButton";
import React, { useState } from "react";

function Nav() {
    const [open, setOpen] = useState(false);

    const handleClick = () => { 
        setOpen(!open);
    }

    const closeMenu = () => {
        setOpen(false);
    }

    const theme = useContext(ThemeContext);
     const darkMode = theme.darkMode;
     const { isLoggedIn } = useContext(AuthContext);
     let history = useHistory();
     console.log(darkMode);

    return(
        <header>
            
            <nav className={styles.navbar}>
{/* 
                <Link to='/' className={styles.navlogo}>
                    Logo
                </Link> */}
                <div onClick={handleClick} className={styles.navicon}>
                    {open ? <FiX /> : <FiMenu />}
                </div>

                <ul className={open ? 'styles.navlinks active' : 'styles.navlinks'}>
                    <li className={styles.navitems}>
                        <Link to="/" className={styles.navlink} onClick={closeMenu}>
                            Home
                        </Link>
                    </li>
                    <li className={styles.navitems}>
                        <Link to="/about" className={styles.navlink} onClick={closeMenu}>
                            About
                        </Link>
                    </li>
                    <li className={styles.navitems}>
                        <Link to="/projects" className={styles.navlink} onClick={closeMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className={styles.navitems}>
                        <Link to="/contact" className={styles.navlink} onClick={closeMenu}>
                            Contact
                        </Link>
                    </li>
                </ul>

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
           
            
        </header>
    );
};

export default Nav