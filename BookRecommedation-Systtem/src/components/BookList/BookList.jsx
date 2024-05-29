import React, { useEffect, useState } from "react";
import styles from "./BookList.module.scss";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [sortCriteria, setSortCriteria] = useState("author");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = (page, criteria) => {
    // Adjust the URL to include filtering and sorting criteria
    const url = `http://bookrc.uz/api/books`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const booksArray = Object.values(data.books);
        setBooks(booksArray);
        setTotalPages(data.totalPages);
      });
  };

  useEffect(() => {
    fetchBooks(currentPage, sortCriteria);
  }, [currentPage, sortCriteria]);

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    setCurrentPage(1); // Reset to the first page whenever sort criteria changes
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className={styles.bookListContainer}>
      <h1>Books</h1>
      {/* FilterComponent for handling filters */}
      {/* Add logic to apply filters and update state variables */}
      <div className={styles.booksGrid}>
        {books.map((book, index) => (
          <div key={index} className={styles.bookCard}>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Pages: {book.pages}</p>
            <p>Rating: {book.rating}</p>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookList;
