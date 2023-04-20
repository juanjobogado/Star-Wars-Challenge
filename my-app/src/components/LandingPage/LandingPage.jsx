import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <main className={styles.container}>
      <header>
        <h2 className={styles.h2Landing}>Star Wars Challenge</h2>
        <p className={styles.pLanding}> May the force be with you on this amazing adventure! Discover everything about Star Wars movies and their characters on our web application, where you can explore SWAPI data and filter by gender and eye color. Be a true Jedi in navigating our page and enjoy an incredibly responsive experience!</p>
      </header>
      <div className={styles.btn}>
        <Link to="/home">
          <button className={styles.btnLan}>START</button>
        </Link>
      </div>
    </main>
  );
};
