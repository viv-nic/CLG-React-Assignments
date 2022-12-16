import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {

    let myClass;
    if (props.type === "login"){
        myClass = styles["login-button"];
    } else if (props.type === "book-search") {
        myClass = styles["book-search"];
    } else if (props.type === "submit") {
        myClass = styles["submit-button"];
    } else {
        myClass = "button";
    }

    return(
       
        <div>
            <button
                className={myClass}
                onClick={props.onClick}
            >
                {props.name}
            </button>
        </div>
    );
};

export default Button;