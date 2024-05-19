import React, { useState } from "react";
import styles from "./ProfileForm.module.scss";
import leafImage from "../../assets/leaf.png"; // Replace with your leaf image path
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
function ProfileForm() {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    lastBook: "",
    pages: "",
    genre: "",
    onlineOffline: "",
    rating: "",
    comment: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className={styles.profileFormContainer}>
      <div className={styles.formContent}>
        <h2 className={styles.title}>Tell me about yourself</h2>
        <p className={styles.subtitle}>
          Answer questions to finish registering.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputField}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="profession">Profession</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="lastBook">Which book did you read last?</label>
            <input
              type="text"
              id="lastBook"
              name="lastBook"
              value={formData.lastBook}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="pages">How many pages was that book?</label>
            <input
              type="number"
              id="pages"
              name="pages"
              value={formData.pages}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label htmlFor="genre">What's your favorite genre?</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputField}>
            <label htmlFor="onlineOffline">
              Do you prefer reading books online or offline?
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  className={styles.radio}
                  type="radio"
                  name="onlineOffline"
                  value="Online"
                  checked={formData.onlineOffline === "Online"}
                  onChange={handleChange}
                />{" "}
                Online
              </label>
              <label>
                <input
                  type="radio"
                  name="onlineOffline"
                  value="Offline"
                  checked={formData.onlineOffline === "Offline"}
                  onChange={handleChange}
                />{" "}
                Offline
              </label>
            </div>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="rating">Rate us</label>
            <div className={styles.rating}>
              {[...Array(5)].map((_, index) => (
                <span
                  key={index}
                  className={index < formData.rating ? styles.active : ""}
                  onClick={() =>
                    setFormData({ ...formData, rating: index + 1 })
                  }
                >
                  <AiFillStar />
                </span>
              ))}
            </div>
          </div>

          <div className={styles.inputField}>
            <label htmlFor="comment">Leave us a comment</label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>
            <Link to={"/login"} className={styles.link}>
              Sign up
            </Link>
          </button>
        </form>
      </div>
      <div className={styles.leafImage}>
        <img src={leafImage} alt="Leaf" />
      </div>
    </div>
  );
}

export default ProfileForm;
