import React, { useState } from "react";
import axios from "axios";
import styles from "./Register.module.scss";
import leaf from "../../assets/leaf.png";
import logo from "../../assets/logo.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    email: "",
    password: "",
    password_confirmation: "",
    role: "",
    book_name: "",
    book_page: "",
    book_genre: "",
    book_status: "",
    book_rating: "",
    comment: "",
  });

  const [token, setToken] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://bookrc.uz/api/register",
        formData
      );
      const userToken = response.data.token;
      setToken(userToken);
      localStorage.setItem("token", userToken);
      // Redirect or fetch books here if needed
    } catch (error) {
      console.error("There was an error!", error.response.data);
    }
  };

  return (
    <div className={styles.wrapper_register}>
      <div className={styles.info_title_header}>
        <div className={styles.title_info}>
          <img src={logo} alt="" />
          <h1>Welcome back!</h1>
          <p>Enter your Credentials to access your account</p>
        </div>
        <img src={leaf} alt="" className={styles.leaf} />
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.formGroup}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.inputField}
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Profession</label>
          <input
            className={styles.inputField}
            type="text"
            name="profession"
            placeholder="Profession"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Email</label>
          <input
            className={styles.inputField}
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Password</label>
          <input
            className={styles.inputField}
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Confirm Password</label>
          <input
            className={styles.inputField}
            type="password"
            name="password_confirmation"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Role</label>
          <input
            className={styles.inputField}
            type="text"
            name="role"
            placeholder="Role"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book Name</label>
          <input
            className={styles.inputField}
            type="text"
            name="book_name"
            placeholder="Book Name"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book Page</label>
          <input
            className={styles.inputField}
            type="number"
            name="book_page"
            placeholder="Book Page"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book Genre</label>
          <input
            className={styles.inputField}
            type="text"
            name="book_genre"
            placeholder="Book Genre"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book Status</label>
          <input
            className={styles.inputField}
            type="text"
            name="book_status"
            placeholder="Book Status"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Book Rating</label>
          <input
            className={styles.inputField}
            type="number"
            name="book_rating"
            placeholder="Book Rating"
            onChange={handleChange}
            min="1"
            max="5"
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.label}>Comment</label>
          <textarea
            className={styles.textArea}
            name="comment"
            placeholder="Comment"
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </form>
      {token && <p>Registration successful! Your token: {token}</p>}
    </div>
  );
};

export default Register;
