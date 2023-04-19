import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import { getFilms } from "../../redux/actions";



export default function Home() {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.films)

    useEffect(() => {
        if(!films.length){
            console.log("entra")
            dispatch(getFilms())
        }
    }, [dispatch])

    return(
        <div className={styles.containerHome}>
            <div className={styles.cards}>
            { films.map((c, movie) => (
                <Card
                title={c.title}
                episode_id={c.episode_id}
                director={c.director}
                movie={movie+1}
                />
            )) }
            </div>
        </div>
    );
};