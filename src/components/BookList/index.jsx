import React from "react";
import Book from "../Book";
import styles from "./BookList.module.css";


const BookList = (props) => {
    if(props.books.length === 0) {
        return null
    }
    return (
        <section>
            <ul className={styles["books-list"]}>
                {props.books.map((book) => (
                    <Book key={book.key} name={book.name}/>
                ))}
            </ul>

        </section>

    );
};

export default BookList;