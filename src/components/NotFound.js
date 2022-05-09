import React from "react";
import styles from "../styles/NotFound.module.css";
import { useTitle } from "./helpers/helper";

const NotFound = () => {
  useTitle("Page NotFound");
  return (
    <div className={styles.container}>
      <div className={styles.errContainer}>
        <p className={styles.error}>404</p>
        <p className={styles.errMsg}>Page Not Found!</p>
      </div>
    </div>
  );
};

export default NotFound;
