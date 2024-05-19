import React, { useState } from "react";
import styles from "./SignupForm.module.scss";
import logo from "../../assets/logo.png"; // Replace with your logo image path
import leafImage from "../../assets/leaf.png"; // Replace with your leaf image path
import { Link } from "react-router-dom";
function SignupForm() {
  const [email, setEmail] = useState("rikhom21@gmail.com");
  const [password, setPassword] = useState("rhom264"); // Use actual default values
  const [category, setCategory] = useState("reader"); // Default selection

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your signup logic here
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.formContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
        <h2 className={styles.title}>Get Started Now</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="category">
              Which category would you like to choose?
            </label>
            <div className={styles.radioGroup}>
              <label>
                <input
                  type="radio"
                  value="reader"
                  checked={category === "reader"}
                  onChange={() => setCategory("reader")}
                />{" "}
                Reader
              </label>
              <label>
                <input
                  type="radio"
                  value="writer"
                  checked={category === "writer"}
                  onChange={() => setCategory("writer")}
                />{" "}
                Writer
              </label>
            </div>
          </div>

          <div className={styles.termsCheckbox}>
            <input type="checkbox" id="terms" required />
            <label htmlFor="terms">I agree to the terms & policy</label>
          </div>

          <button type="submit">Sign up</button>
        </form>

        <div className={styles.socialLogin}>
          <button className={styles.googleBtn}>Sign up with Google</button>
          <button className={styles.appleBtn}>Sign up with Apple</button>
        </div>

        <p className={styles.signupLink}>
          Don't have an account? <Link to={"/profileform"}>Sign in</Link>
        </p>
      </div>
      <div className={styles.leafImage}>
        <img src={leafImage} alt="Leaf" />
      </div>
    </div>
  );
}

export default SignupForm;
