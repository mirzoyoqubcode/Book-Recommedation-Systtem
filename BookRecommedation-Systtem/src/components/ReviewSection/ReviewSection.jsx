import React from "react";
import styles from "./ReviewSection.module.scss";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const ReviewSection = () => {
  const reviews = [
    {
      author: "Samantha D.",
      verified: true,
      rating: 5,
      date: "April 14, 2024",
      bookTitle: "The Alchemist",
      comment:
        "A captivating tale that inspires readers to pursue their dreams and listen to their hearts. Coelho's simple yet profound storytelling makes this a must-read for anyone seeking direction and purpose in life.",
    },
    {
      author: "Alex M.",
      verified: true,
      rating: 5,
      date: "April 15, 2024",
      bookTitle: "To Kill a Mockingbird",
      comment:
        "by Harper Lee. A powerful and timeless story that tackles themes of racial injustice, moral growth, and compassion. Harper Lee's masterpiece is a must-read for its profound impact and enduring relevance.",
    },
    {
      author: "Ethan R.",
      verified: true,
      rating: 4,
      date: "March 28, 2024",
      bookTitle: "The Hitchhiker's Guide to the Galaxy",
      comment:
        "by Douglas Adams. A hilarious and absurd adventure that takes readers on a wild ride through space. Douglas Adams' wit and imagination shine through in this sci-fi classic that is sure to leave you laughing out loud.",
    },
    {
      author: "Olivia P.",
      verified: false,
      rating: 5,
      date: "February 12, 2024",
      bookTitle: "Pride and Prejudice",
      comment:
        "by Jane Austen. A delightful exploration of love, class, and societal expectations in 19th century England. Jane Austen's sharp wit and insightful social commentary make this a timeless classic that continues to resonate with readers today.",
    },
    {
      author: "Liam K.",
      verified: true,
      rating: 5,
      date: "January 5, 2024",
      bookTitle: "1984",
      comment:
        "by George Orwell. A chilling dystopian novel that explores themes of surveillance, totalitarianism, and the power of language. Orwell's prophetic vision of a society controlled by Big Brother remains hauntingly relevant in our modern world.",
    },
    {
      author: "Ava H.",
      verified: false,
      rating: 4,
      date: "December 20, 2023",
      bookTitle: "The Lord of the Rings",
      comment:
        "by J.R.R. Tolkien. An epic high fantasy saga that transports readers to the enchanting world of Middle-earth. Tolkien's rich world-building, unforgettable characters, and timeless themes of good versus evil make this a masterpiece of literature.",
    },
  ];
  return (
    <section className={styles.reviewSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>Rating & Reviews</h2>
        <div className={styles.options}>
          <span className={styles.allReviews}>
            All Reviews ({reviews.length})
          </span>
          <div className={styles.filter}>
            <span className={styles.filterLabel}># Latest</span>
            {/* You can add a dropdown menu for sorting here */}
          </div>
          <button className={styles.writeReviewButton}>Write a Review</button>
        </div>
      </div>

      <ul className={styles.reviewList}>
        {reviews.map((review, index) => (
          <li key={index} className={styles.reviewItem}>
            <div className={styles.reviewHeader}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{review.author}</span>
                {review.verified && (
                  <FaCheckCircle className={styles.verifiedIcon} />
                )}
              </div>
              <div className={styles.ratingStars}>
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className={styles.star}>
                    ★
                  </span>
                ))}
              </div>
            </div>
            <h4 className={styles.bookTitle}>{review.bookTitle}</h4>
            <p className={styles.reviewComment}>{review.comment}</p>
            <span className={styles.reviewDate}>Posted on {review.date}</span>
          </li>
        ))}
      </ul>
      <Link to={"/writer"}>
        <button className={styles.loadMoreButton}>Load More Reviews</button>
      </Link>
    </section>
  );
};

export default ReviewSection;
