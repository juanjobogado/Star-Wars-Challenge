import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.container}>
      <header>
        <h1>Star Wars Challenge</h1>
      </header>
      <div className={styles.btn}>
        <Link to="/home">
          <button className={styles.btnLan}>START</button>
        </Link>
      </div>
    </main>
  );
};
