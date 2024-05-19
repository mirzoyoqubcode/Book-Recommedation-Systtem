import React, { useState } from "react";
import styles from "./NewsletterSubscription.module.scss";
import { MdEmail } from "react-icons/md"; // Import email icon

function NewsletterSubscription() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your subscription logic here
    console.log("Subscribed with email:", email);
  };

  return (
    <section className={styles.newsletterSubscription}>
      <div className={styles.content}>
        <h2 className={styles.title}>STAY UP TO DATE ABOUT OUR LATEST BOOKS</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <MdEmail className={styles.emailIcon} />
            <input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit">Subscribe to Newsletter</button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSubscription;
