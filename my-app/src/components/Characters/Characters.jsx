import React, { useEffect } from "react";
import styles from "./Characters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, filterCharactersEyeColor, filterCharactersGender } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

export default function Characters() {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);
  const { movie } = useParams();

  useEffect(() => {
    if (!characters.length) {
      dispatch(getCharacters(movie));
    }
  }, [characters.length, dispatch, movie]);

  function handleFilterEyeColor(e) {
    dispatch(filterCharactersEyeColor(e.target.value));
  }

  function handleFilterGender(e) {
    dispatch(filterCharactersGender(e.target.value));
  }

  return (
    <div className={styles.containerCharacters}>
      <div className={styles.header}>
        <Link to="/home">
          <button className={styles.backButton}>Back</button>
        </Link>
      </div>

      <div className={styles.filters}>
        <select
          className={styles.filter}
          onChange={(e) => handleFilterEyeColor(e)}
        >
          <option value="All">All Eye Colors</option>
          <option value="blue">Blue</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
          <option value="brown">Brown</option>
          <option value="blue-gray">Blue-gray</option>
          <option value="black">Black</option>
          <option value="orange">Orange</option>
          <option value="hazel">Hazel</option>
        </select>

        <select
          className={styles.filter}
          onChange={(e) => handleFilterGender(e)}
        >
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="n/a">No gender</option>
          <option value="hermaphrodite">Hermaphrodite</option>
        </select>
      </div>

      
      {characters.length === 0 ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {characters?.map((c) => (
            <div key={c.name}>
              <h3>Name: {c.name}.</h3>
              <h4>Eye color: {c.eye_color}.</h4>
              <h4>Gender: {c.gender}.</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
