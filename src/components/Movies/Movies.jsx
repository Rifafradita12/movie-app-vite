import styles from "./Movies.module.css";
import Movie from "../Movie/Movie";
import data from "../../utils/constans/data";
import {useContext, useState} from 'react';
import MoviesContext from "../context/MoviesContext";


function Movies(props) {
// const {movies, setMovies} = props;


const {title = "Lates Movies"} = props;
const {movies} = useContext(MoviesContext)

  function handleClick(){
    const movie = {
    id: "xyz", title: "Jigsaw",
    year: 2022, type: "Movie",
    poster: "https://picsum.photos/200/300?grayscale",
  };
  // setMovies([...movies,movie]);
}

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2>Latest Movies</h2>
        <div className={styles.movie__container}>
          {movies.map((movie) => {
            return <Movie key={movie.id} movie={movie} />;
          })}
        </div>
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;
