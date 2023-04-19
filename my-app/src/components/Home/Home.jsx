import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import { getFilms } from "../../redux/actions";

function renderMovies(films) {
    return films.map((film, movie) => (
        <Card
            key={film.episode_id}
            title={film.title}
            episode_id={film.episode_id}
            director={film.director}
            movie={movie+1}
        />
    ));
}

export default function Home() {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films)

    useEffect(() => {
        if(!films.length){
            console.log("entra")
            dispatch(getFilms())
        }
    }, [dispatch])

    return (
        <div className={styles.containerHome}>
          <Link to="/">
            <button className={styles.backButton}>Back</button>
          </Link>
          <div className={styles.cards}>{renderMovies(films)}</div>
        </div>
      );
};