import React from "react";
import styles from "./RelatedBooks.module.scss";
import relatedbook1 from "../../assets/relatedBook1.png";
import relatedbook2 from "../../assets/relatedBook2.png";
import relatedbook3 from "../../assets/relatedBook3.png";
import relatedbook4 from "../../assets/relatedBook4.png";
import { FaStar } from "react-icons/fa";
const RelatedBooks = () => {
  return (
    <section>
      <div className={styles.mostReadBooks}>
        <h2>You might also like</h2>
        <div className={styles.bookList}>
          <article>
            <img src={relatedbook1} alt="" />
            <h3>The Kite Runner</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Historical fiction</p>
          </article>
          <article>
            <img src={relatedbook2} alt="" />
            <h3>The Catcher in the Rye</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Literary fiction</p>
          </article>
          <article>
            <img src={relatedbook3} alt="" />
            <h3>To Kill a Mockingbird</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Novel</p>
          </article>
          <article>
            <img src={relatedbook4} alt="" />
            <h3>Outliers</h3>
            <span>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </span>
            <p>Non-fiction</p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default RelatedBooks;
