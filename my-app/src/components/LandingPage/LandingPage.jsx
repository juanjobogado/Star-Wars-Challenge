import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import logo from "../images and gifs/starWarsLogoNegro.png";

export default function LandingPage() {
  const [isStopped, setIsStopped] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".container");

    const handleScroll = () => {
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const windowTop = window.scrollY;
      const windowHeight = window.innerHeight;

      if (
        containerTop + containerHeight / 2 > windowTop + windowHeight / 2 &&
        !isStopped
      ) {
        setIsStopped(true);
        container.classList.add(styles.stop);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isStopped]);

  return (
    <main className={styles.container}>
      <header>
        <img src={logo} />
        <p className={styles.pLanding}>
          May the force be with you on this amazing adventure! Discover
          everything about Star Wars movies and their characters on our web
          application, where you can explore SWAPI data and filter by gender
          and eye color. Be a true Jedi in navigating our page and enjoy an
          incredibly responsive experience!
        </p>
      </header>
      <div className={styles.btn}>
        <Link to="/home">
          <button className={styles.btnLan}>START</button>
        </Link>
      </div>
    </main>
  );
}
