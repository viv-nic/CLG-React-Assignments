import React, { useCallback, useState} from "react";
import Button from "../components/Button";
import BookList from "../components/BookList";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";


// function Book() {
//     const [books, setBooks] = useState([]);

//     function fetchBooksHandler() {
//         fetch("https://openlibrary.org/authors/OL34184A/works.json?limit=10").then((response) => {
//             return response.json();
//         }).then((data) => {
//             const transformedBooks = data.entries.map((bookData, index) => {
//                 return {
//                     key: bookData.key,
//                     name: bookData.title
//                 }
//             })
//             setBooks(transformedBooks)
//         })
//     }
//     return(
//         <div>
//             <section>
//                 <Button onClick={fetchBooksHandler}>
//                     Search for Roald Dahl's work
//                 </Button>
//             </section>
//             <section>
//                 <BookList books={books}/>
//             </section>
//         </div>
//     )
// }
const Book = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const fetchBooksHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                "https://openlibrary.org/authors/OL34184A/works.json?limit=10"
            );
            if (response.status === 404) {
                setError(true);
                console.log(response);
                throw new Error("Something went wrong");
            }
        const data = await response.json();
        console.log({data})
        const transformedBooks = data.entries.map((bookData, index) => {
            return {
              key: bookData.key,
              name: bookData.title
            };
          });
          setBooks(transformedBooks);
        } catch (error) {
          setError(error.message);
        }
        setIsLoading(false);
    }, []);

    let content = <p>No books found</p>;

    if (error) {
        content = <p>{error}</p>;
      }

    if (books.length > 0) {
        content = <BookList books={books} />;
      }

    if (isLoading) {
        content = <LoadingSpinner />;
      }

    
    return(
        <section>
            <h1>Books</h1>
            <Button onClick={fetchBooksHandler}>Search for Roald Dahl books</Button>
            {content}
        </section>
    );
};

export default Book;