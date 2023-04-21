import React, { useEffect, useState } from "react";
import styles from "./Characters.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters, filterCharactersEyeColor, filterCharactersGender } from "../../redux/actions";
import { Link, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import gif from "../images and gifs/charactersStarWars.gif"

export default function Characters() {
  const dispatch = useDispatch();
  const allCharacters = useSelector((state) => state.characters);
  const { movie } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage, setCharactersPerPage] = useState(3);
  const indexOfLastCharacter = currentPage * charactersPerPage; //9
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage; //0
  const currentCharacters = allCharacters?.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect( () => {
      dispatch(getCharacters(movie));
  }, [dispatch, movie]);
  
  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_CHARACTERS" });
    };
  }, [dispatch]);

  function handleFilterEyeColor(e) {
    dispatch(filterCharactersEyeColor(e.target.value));
    setCurrentPage(1);
  }

  function handleFilterGender(e) {
    dispatch(filterCharactersGender(e.target.value));
    setCurrentPage(1);
  }

  return (
    <div className={styles.containerCharacters}>
      <div className={styles.divBtnBackCharacters}>
        <Link to="/home">
          <button className={styles.backButtonCharacters}>Back</button>
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
{/* 
      <div className={styles.divContainerPagination}>
            <Pagination
              charactersPerPage={charactersPerPage}
              allCharacters={allCharacters?.length}
              pagination={pagination}
              currentPage={currentPage}
            />
          </div> */}

      
      {allCharacters.length === 0 ? (
        <Loading />
      ) : (
        <div className={styles.divCardsContainer}>
          {currentCharacters?.map((c) => (
            <div key={c.name} className={styles.cardComponent}>
              <img src={gif}></img>
              <h3>Name: {c.name}.</h3>
              <h3>Eye color: {c.eye_color}.</h3>
              <h3>Gender: {c.gender}.</h3>
            </div>
          ))}
        </div>
      )}

<div className={styles.divContainerPagination}>
            <Pagination
              charactersPerPage={charactersPerPage}
              allCharacters={allCharacters?.length}
              pagination={pagination}
              currentPage={currentPage}
            />
          </div>
    </div>
  );
}
