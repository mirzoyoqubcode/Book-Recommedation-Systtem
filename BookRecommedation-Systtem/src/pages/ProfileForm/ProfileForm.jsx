import React, { useState } from "react";
import styles from "./ProfileForm.module.scss";
import leafImage from "../../assets/leaf.png"; // Replace with your leaf image path
// import { register } from "../../api/registeration";
import { useNavigate } from "react-router-dom";

function ProfileForm() {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [bookName, setBookName] = useState("");
  const [bookGenre, setBookGenre] = useState("");
  const [bookPage, setBookPage] = useState("");
  const [bookStatus, setBookStatus] = useState("");
  const [bookRating, setBookRating] = useState("");
  const [comment, setComment] = useState("");
  const [error, setError] = useState(null);
  const [token, setToken] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await register(
        name,
        profession,
        email,
        password,
        role,
        bookName,
        bookGenre,
        bookPage,
        bookStatus,
        bookRating,
        comment
      );
      setToken(token);
      console.log("Registration successful, token:", token);
      // Save the token to local storage or handle it as needed
      localStorage.setItem("token", token);
      navigate("/"); // Navigate to a different route if needed
    } catch (error) {
      setError(
        error.message ||
          "Registration failed. Please check your details and try again."
      );
    }
  };

  return (
    <div className={styles.profileFormContainer}>
      <div className={styles.formContent}>
        <h2 className={styles.title}>Tell me about yourself</h2>
        <p className={styles.subtitle}>
          Answer questions to finish registering.
        </p>

        {error && <p className={styles.error}>{error}</p>}

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputField}>
            <label>Email address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>Profession</label>
            <input
              type="text"
              value={profession}
              onChange={(e) => setProfession(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>Which book did you read last?</label>
            <input
              type="text"
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>How many pages was that book?</label>
            <input
              type="number"
              value={bookPage}
              onChange={(e) => setBookPage(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>What's your favorite genre?</label>
            <input
              type="text"
              value={bookGenre}
              onChange={(e) => setBookGenre(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputField}>
            <label>Do you prefer reading books online or offline?</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="Online"
                  checked={bookStatus === "Online"}
                  onChange={(e) => setBookStatus(e.target.value)}
                />{" "}
                Online
              </label>
              <label>
                <input
                  type="radio"
                  value="Offline"
                  checked={bookStatus === "Offline"}
                  onChange={(e) => setBookStatus(e.target.value)}
                />{" "}
                Offline
              </label>
            </div>
          </div>
          <div className={styles.inputField}>
            <label>Which category would you like to choose?</label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="reader"
                  checked={role === "reader"}
                  onChange={(e) => setRole(e.target.value)}
                />{" "}
                Reader
              </label>
              <label>
                <input
                  type="radio"
                  value="writer"
                  checked={role === "writer"}
                  onChange={(e) => setRole(e.target.value)}
                />{" "}
                Writer
              </label>
            </div>
          </div>
          <div className={styles.inputField}>
            <label>Leave us a comment</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Sign up
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
