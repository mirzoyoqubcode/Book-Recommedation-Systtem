import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../Book/Book";
import styles from "./ReadBooks.module.scss";

const ReadBooks = () => {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const [displayedBooks, setDisplayedBooks] = useState(6); // Number of books to initially display
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://bookrc.uz/api/books");
        const modifiedBooks = response.data.map((book) => ({
          ...book,
          image: `http://bookrc.uz/storage/app/public/${book.image}`,
        }));
        setBooks(modifiedBooks);
      } catch (error) {
        setError("Error fetching books: " + error.message);
      }
    };
    fetchBooks();
  }, []);

  const handleViewMore = () => {
    setDisplayedBooks(books.length); // Show all books
    setShowAll(true);
  };

  const handleViewLess = () => {
    setDisplayedBooks(3); // Show only 3 books
    setShowAll(false);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title_books}>Most Read</h1>
      {error && <p className={styles.error}>{error}</p>}
      <div className={styles.bookList}>
        {books.slice(0, displayedBooks).map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
      {!showAll && books.length > 3 && (
        <button onClick={handleViewMore} className={styles.viewAllButton}>
          View More
        </button>
      )}
      {showAll && (
        <button onClick={handleViewLess} className={styles.viewAllButton}>
          {" "}
          View Less
        </button>
      )}
    </div>
  );
};

export default ReadBooks;
