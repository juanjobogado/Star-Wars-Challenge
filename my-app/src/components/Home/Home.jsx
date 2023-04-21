import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Home.module.css";
import Card from "../Card/Card";
import { getFilms } from "../../redux/actions";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import image1 from "../images and gifs//gifPosterPeliculasStarWars.gif";
import image2 from "../images and gifs/gifTheEmpireStrikes.gif";
import image3 from "../images and gifs/gifReturnJedi.gif";
import image4 from "../images and gifs/gifThePhanton.gif";
import image5 from "../images and gifs/gifAttackOfTheClones.gif";
import image6 from "../images and gifs/gifRevengeOfTheSith.gif";

export default function Home() {
  const dispatch = useDispatch();
  const films = useSelector((state) => state.films);
  const [currentPage, setCurrentPage] = useState(1);
  const [filmsPerPage, setfilmsPerPage] = useState(3);
  const indexOfLastFilm = currentPage * filmsPerPage;
  const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
  const currentFilms = films?.slice(indexOfFirstFilm, indexOfLastFilm);

  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const images = [image1, image2, image3, image4, image5, image6];

  useEffect(() => {
    if (!films.length) {
      dispatch(getFilms());
    }
  }, [dispatch, films.length]);

  return (
    <div className={styles.containerHome}>
      <div className={styles.divBtnBackHome}>
        <Link to="/">
          <button className={styles.backButtonHome}>Back</button>
        </Link>
      </div>
      {films.length === 0 ? (
        <Loading />
      ) : (
        <div className={styles.cards}>
          {currentFilms.map((film, movie) => {
            const imageIndex = indexOfFirstFilm + movie;
            return (
              <Card
                key={film.episode_id}
                title={film.title}
                episode_id={film.episode_id}
                director={film.director}
                movie={movie + 1}
                image={images[imageIndex]}
              />
            );
          })}
        </div>
      )}

      <div className={styles.divContainerPagination}>
        <Pagination
          charactersPerPage={filmsPerPage}
          allCharacters={films?.length}
          pagination={pagination}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
