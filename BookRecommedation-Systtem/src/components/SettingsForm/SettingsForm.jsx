import React, { useState } from "react";
import styles from "./SettingsForm.module.scss";

function SettingsForm() {
  const [formData, setFormData] = useState({
    email: "rikom1@gmail.com",
    name: "Enter name", // Placeholder text
    password: "rikom244",
    category: "Reader",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to server)
    console.log(formData);
  };

  return (
    <div className={styles.settingsContainer}>
      <h2 className={styles.title}>Settings</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className={styles.categoryGroup}>
          <span>Which category would you like to choose?</span>
          <div className={styles.radioButtons}>
            <label>
              <input
                type="radio"
                name="category"
                value="Reader"
                checked={formData.category === "Reader"}
                onChange={handleChange}
              />{" "}
              Reader
            </label>
            <label>
              <input
                type="radio"
                name="category"
                value="Writer"
                checked={formData.category === "Writer"}
                onChange={handleChange}
              />{" "}
              Writer
            </label>
          </div>
        </div>

        <button type="submit" className={styles.changeButton}>
          Change
        </button>
      </form>
    </div>
  );
}

export default SettingsForm;
