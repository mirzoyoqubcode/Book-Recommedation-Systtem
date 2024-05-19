import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Link to={"/"} className={styles.Link}>
          <h1>Big Data</h1>
        </Link>
      </div>
      <div className={styles.rightWrapper}>
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
        <CgProfile className={styles.icon_profile} />
      </div>
    </div>
  );
};

export default Navbar;
