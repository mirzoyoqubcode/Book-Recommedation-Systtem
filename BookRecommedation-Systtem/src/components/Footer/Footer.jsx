import React from "react";
import styles from "./Footer.module.scss";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"; // Assuming you're using Font Awesome

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2 className={styles.title}>Big Data</h2>
          <p className={styles.tagline}>
            Exploring worlds, one page at a time.
          </p>
          <div className={styles.socialIcons}>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaFacebook />
            </a>
          </div>
        </div>
        <div className={styles.columnGroup}>
          <FooterColumn
            title="COMPANY"
            links={["About", "Features", "Works", "Career"]}
          />
          <FooterColumn
            title="HELP"
            links={[
              "Customer Support",
              "Genres",
              "Terms & Conditions",
              "Privacy Policy",
            ]}
          />
          <FooterColumn
            title="RESOURCES"
            links={[
              "Free eBooks",
              "Development Tutorial",
              "How-to - Blog",
              "Youtube Playlist",
            ]}
          />
        </div>
      </div>
      <p className={styles.copyright}>Big Data © 2024, All Rights Reserved</p>
    </footer>
  );
};

// Helper component for columns
const FooterColumn = ({ title, links }) => (
  <div className={styles.column}>
    <h3 className={styles.columnTitle}>{title}</h3>
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
