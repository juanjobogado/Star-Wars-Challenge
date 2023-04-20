import React from "react";
import styles from  "./Card.module.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Card({ title, episode_id, director, movie }){
    return (
        <div className={styles.cardComponent}>
            <div className={styles.cardContent}>
                <h3>Movie title: {title}.</h3>
                <h3>Episode: {episode_id}.</h3>
                <h3>Director: {director}.</h3>
                <Link to={`/characters/${movie}/`}>
                    <button>Characters</button>
                </Link>
            </div>
        </div>
    );
};