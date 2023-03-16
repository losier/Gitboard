import React from "react";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.body}>
      <main
        style={{
          margin: "auto",
        }}
      >
        <div className={styles.preloader}>
          <div className={styles.preloader__square}></div>
          <div className={styles.preloader__square}></div>
          <div className={styles.preloader__square}></div>
          <div className={styles.preloader__square}></div>
        </div>
        <div className={styles.status}>
          Loading
          <span className={styles.status__dot}>.</span>
          <span className={styles.status__dot}>.</span>
          <span className={styles.status__dot}>.</span>
        </div>
      </main>
    </div>
  );
};

export default Loading;
