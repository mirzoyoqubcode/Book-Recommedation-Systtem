import React from "react";
import styles from "./ReadBooks.module.scss";
import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import book6 from "../../assets/book6.png";
import book7 from "../../assets/book7.png";
import book8 from "../../assets/book8.png";
import { FaStar } from "react-icons/fa";
const ReadBooks = () => {
  return (
    <section>
      <div className={styles.mostReadBooks}>
        <h2>Most Read</h2>
        <div className={styles.bookList}>
          <article>
            <img src={book1} alt="" />
            <h3>The Lord of the Rings</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Fantasy</p>
          </article>
          <article>
            <img src={book2} alt="" />
            <h3>Harry Potter series</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Fantasy</p>
          </article>
          <article>
            <img src={book3} alt="" />
            <h3>Foundation</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Fantasy</p>
          </article>
          <article>
            <img src={book4} alt="" />
            <h3>Do Androids Dream?</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Science Fiction</p>
          </article>
        </div>

        <button className={styles.viewAllBtn}>View All</button>
      </div>
      <div className={styles.mostReadBooks}>
        <h2>Most Rated</h2>
        <div className={styles.bookList}>
          <article>
            <img src={book5} alt="" />
            <h3>Murder on the Orient Express</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Mystery</p>
          </article>
          <article>
            <img src={book6} alt="" />
            <h3>Sherlock Holmes</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Mystery</p>
          </article>
          <article>
            <img src={book7} alt="" />
            <h3>Pride and Prejudice</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Fantasy</p>
          </article>
          <article>
            <img src={book8} alt="" />
            <h3>Notebook</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Science Fiction</p>
          </article>
        </div>

        <button className={styles.viewAllBtn}>View All</button>
      </div>
    </section>
  );
};

export default ReadBooks;
