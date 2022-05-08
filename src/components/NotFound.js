import React, { Component } from "react";
import styles from "../styles/NotFound.module.css";
class NotFound extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.errContainer}>
          <p className={styles.error}>404</p>
          <p className={styles.errMsg}>Page Not Found!</p>
        </div>
      </div>
    );
  }
}

export default NotFound;
