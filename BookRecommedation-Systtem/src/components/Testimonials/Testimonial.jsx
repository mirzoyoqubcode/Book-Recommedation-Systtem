import React, { useState, useEffect } from "react";
import styles from "./Testimonial.module.scss";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("/api/testimonials")
      .then((response) => response.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className={styles.testimonialContainer}>
      <h2>Our Happy Readers</h2>
      <div className={styles.testimonialSlider}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.testimonialCard}>
            <div className={styles.rating}>
              {Array.from({ length: testimonial.rating }, (_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className={styles.quote}>"{testimonial.quote}"</p>
            <p className={styles.author}>- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
