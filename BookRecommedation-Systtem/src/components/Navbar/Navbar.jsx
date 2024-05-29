import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null); // Clear the token state
    navigate("/login");
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Link to={"/"} className={styles.link_href}>
          <h1>Big Data</h1>
        </Link>
      </div>
      <div className={styles.rightWrapper}>
        <Link to={"/allbooks"} className={styles.books_list}>
          All Books
        </Link>
        <div className={styles.searchBar}>
          <span className={styles.searchIcon}>
            <FaSearch />
          </span>
          <input
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>

        <p className={styles.searchIconMobile}>
          <FaSearch />
        </p>
        <div className={styles.avatar_component}>
          {token ? (
            <button onClick={handleLogout} className={styles.Link}>
              Logout
            </button>
          ) : (
            <div className={styles.links_admin}>
              <Link to={"/login"} className={styles.Link}>
                Login
              </Link>
              <Link to={"/register"} className={styles.Link}>
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
