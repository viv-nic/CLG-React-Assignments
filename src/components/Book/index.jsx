import React from "react";
import classes from "./Book.module.css"

const Book = (props) => {
    return (
        <ol className={classes.Book}>
            <h3>{props.name}</h3>
            
        </ol>
    );
};

export default Book;