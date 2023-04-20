import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.loader}></div>
      <p>Loading...</p>
    </div>
  );
}
