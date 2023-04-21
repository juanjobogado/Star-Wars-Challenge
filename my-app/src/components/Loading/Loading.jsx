import React from "react";
import styles from "./Loading.module.css";
import gif from "../images and gifs/gifSable.gif";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.divLoading}>
        <img className={styles.gif} src={gif} />
      </div>
    </div>
  );
}
