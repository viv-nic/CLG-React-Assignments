import React, { useCallback, useState } from "react";
import Button from "../components/Button";
import BookList from "../components/BookList";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";



const Book = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [searchText, setSearchText] = useState("");

    const searchTextHandler = (event) => {
      setSearchText(event.target.value);
    };

    const fetchBooksHandler = useCallback(async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                `https://openlibrary.org/search.json?author=${searchText}`
            );
            console.log(response);
            if (response.status === 404) {
                setError(true);
                console.log(response);
                throw new Error("Something went wrong");
            }
        const data = await response.json();
        console.log({data})
        const transformedBooks = data.docs.map((bookData, index) => {
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
    }, [searchText]);

    // useEffect(() => {
    //   fetchBooksHandler()
    //  }, [fetchBooksHandler])

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
            <h1 className="heading-books">Books</h1>
            <input type="text" value={searchText} onChange={searchTextHandler} />
            <Button 
            name="Search for books" onClick={fetchBooksHandler}></Button>
            
            {/* <Button 
            name="Search for books" onClick={fetchBooksHandler} /> */}
            {content}
        </section>
    );
};

export default Book;