import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.scss";
import logo from "../../assets/logo.png";
import leaf from "../../assets/leaf.png";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [token, setToken] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://bookrc.uz/api/login", formData);
      const token = response.data.token; // Retrieve token from the response
      setToken(token); // Update the token state
      localStorage.setItem("token", token); // Store token in localStorage
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(
        error.response?.data?.message ||
          "Login failed! Redirecting to registration..."
      );
      setTimeout(() => {
        navigate("/register");
      }, 3000);
    }
  };

  return (
    <div className={styles.wrapper_mainLogin}>
      <img src={leaf} alt="" className={styles.leaf} />
      <div className={styles.loginContainer}>
        <div className={styles.title_info}>
          <img src={logo} alt="" />
          <h1>Welcome back!</h1>
          <p>Enter your Credentials to access your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
            className={styles.inputField}
          />
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
        {token && <p>Login successful! Your token: {token}</p>}
      </div>
    </div>
  );
};

export default Login;
