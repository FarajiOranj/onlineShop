import React from "react";
import { useTitle } from "./helpers/helper";

// Styles
import styles from "../styles/Loading.module.css";

const Loading = () => {
  useTitle("Please Wait...");
  return (
    <div className={styles.container}>
      <div className={styles.topLoader}></div>
      <div className={styles.wifi}>
        <div className={styles.loadingio_spinner_radio_78eb9uaav66}>
          <div className={styles.ldio_3f1cbjmtptz}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>

      <span className={styles.text}>
        Please Wait <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </div>
  );
};

export default Loading;
