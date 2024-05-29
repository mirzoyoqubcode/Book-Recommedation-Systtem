import React from "react";
import styles from "./Book.module.scss";

const Book = ({ book }) => {
  console.log(book);

  return (
    <div className={styles.book}>
      <img src={book.image} alt={book.name} className={styles.bookImage} />
      <p className={styles.bookTitle}>{book.title}</p>
      <p className={styles.bookAuthor}>Author: {book.new_author}</p>
      <p className={styles.bookAuthor}>Genre: {book.genre}</p>
    </div>
  );
};

export default Book;
