import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
    return(
        // <button type={props.type} className={styles.button}>
        //     {props.children}
        // </button>
        <div>
            <button
                className={styles.button}
                onClick={props.onClick}
            >
                {props.name}
            </button>
        </div>
    );
};

export default Button;