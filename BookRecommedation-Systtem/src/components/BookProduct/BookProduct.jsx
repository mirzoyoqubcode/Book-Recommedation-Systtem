import React, { useState } from "react";
import styles from "./BookProduct.module.scss";
import bookProduct1 from "../../assets/bookproduct1.png";
import bookProduct2 from "../../assets/bookproduct2.png";
import bookProduct3 from "../../assets/bookproduct3.png";
import bookProduct4 from "../../assets/bookproduct4.png";
const BookProduct = () => {
  const data = [];
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic (e.g., send to backend)
    console.log("Rating:", rating, "Comment:", comment);
  };
  return (
    <div>
      <div className={styles.productPage}>
        <div className={styles.breadcrumbs}>Home - Books - Da Vinci Code</div>

        <div className={styles.productContainer}>
          <div className={styles.imageGallery}>
            <img
              src={bookProduct4}
              alt="Book Cover"
              className={styles.mainImage}
            />
            <div className={styles.thumbnailImages}>
              <img src={bookProduct1} alt="Thumbnail 1" />
              <img src={bookProduct2} alt="Thumbnail 2" />
              <img src={bookProduct3} alt="Thumbnail 2" />
            </div>
          </div>

          <div className={styles.details}>
            <h1>The Da Vinci Code</h1>
            <div className={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < rating ? styles.active : ""}
                  onClick={() => setRating(index + 1)}
                >
                  ★
                </span>
              ))}
              <span className={styles.ratingValue}>4.5/5</span>
            </div>
            <p className={styles.genre}>Thriller</p>
            <p className={styles.description}>
              The truth is always the right path, even if it leads us into the
              unknown.
            </p>
            <p className={styles.extraDesc}>
              If you had read this book, please give us your feedback!
            </p>
            <form onSubmit={handleSubmit} className={styles.form}>
              <input type="number" placeholder="How much does it take?" />
              <select>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <input type="text" placeholder="Ratings" />
              <textarea
                placeholder="Comment"
                value={comment}
                onChange={handleCommentChange}
              />
              <button type="submit" className={styles.sendButton}>
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookProduct;
