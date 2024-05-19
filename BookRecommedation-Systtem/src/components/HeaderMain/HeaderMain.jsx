import React from "react";
import styles from "./HeaderMain.module.scss";
import CountUp from "react-countup";
import booksImage from "../../assets/bookLibrary.jpg";
import { Link } from "react-router-dom";
const HeaderMain = () => {
  return (
    <section className={styles.wrapper_headerMain}>
      <div className={styles.bookDiscovery}>
        <div className={styles.content}>
          <h1>Discover books that match your style</h1>
          <p>
            Explore our diverse collection of meticulously crafted stories,
            designed to resonate with your individuality and cater to your
            reading style.
          </p>
          <Link to={"/productPage"}>
            <button className={styles.readNowBtn}>Read Now</button>
          </Link>
        </div>
        <Link to={"/statistic"} className={styles.stataLink}>
          <div className={styles.wrapper_countup}>
            <span className={styles.countUp}>
              <CountUp end={200} />+
            </span>
            <span className={styles.countUp}>
              <CountUp end={2000} />+
            </span>
            <span className={styles.countUp}>
              <CountUp end={30000} />+
            </span>
          </div>
        </Link>
      </div>
      <div className={styles.wrapper_image}>
        <img src={booksImage} alt="" />
      </div>
    </section>
  );
};

export default HeaderMain;
