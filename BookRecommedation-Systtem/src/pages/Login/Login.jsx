import React, { useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../assets/logo.png";
import leafImage from "../../assets/leaf.png";
import { Link } from "react-router-dom";
const Login = () => {
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
        <h2 className={styles.title}>Welcome back!</h2>
        <p>Enter your Credentials to access your account</p>

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

          <button type="submit">Sign in</button>
        </form>

        <div className={styles.socialLogin}>
          <button className={styles.googleBtn}>Sign in with Google</button>
          <button className={styles.appleBtn}>Sign in with Apple</button>
        </div>

        <p className={styles.signupLink}>
          Don't have an account? <Link to={"/signupform"}>Sign up</Link>
        </p>
      </div>
      <div className={styles.leafImage}>
        <img src={leafImage} alt="Leaf" />
      </div>
    </div>
  );
};

export default Login;
