import React, { useEffect, useState } from "react";
import styles from "./ReviewSection.module.scss";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [visibleReviews, setVisibleReviews] = useState(4); // Start with 3 reviews

  useEffect(() => {
    // Fetch reviews from the API
    fetch("http://bookrc.uz/api/ratings")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  const handleShowMore = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 3); // Show 3 more reviews
  };

  const handleShowLess = () => {
    setVisibleReviews(3); // Reset to initial number of reviews
  };

  return (
    <div className={styles.reviewsContainer}>
      <h1>Rating & Reviews</h1>
      <div className={styles.reviewsGrid}>
        {reviews.slice(0, visibleReviews).map((review, index) => (
          <div key={index} className={styles.reviewCard}>
            <div className={styles.header}>
              <span className={styles.email}>{review.email}</span>
              <span className={styles.verified}>✔️</span>
              <span className={styles.rating}>⭐{review.rating}</span>
            </div>
            <h2>{review.user}</h2>
            <p>Comment: {review.comment}</p>
            <p>Read time: {review.take_time}</p>
          </div>
        ))}
      </div>
      <div className={styles.buttonContainer}>
        {visibleReviews < reviews.length ? (
          <button className={styles.showMoreButton} onClick={handleShowMore}>
            Show More
          </button>
        ) : (
          <button className={styles.showMoreButton} onClick={handleShowLess}>
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
