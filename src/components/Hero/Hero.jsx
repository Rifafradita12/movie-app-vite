// import styles from "./Hero.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import Button from "../UI/button/Index";
import axios from "axios";

const StyledHero = styled.section`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 3rem;

  .left {
    margin-bottom: 1rem;
    flex-basis: 40%;
  }

  .right {
    flex-basis: 60%;
  }

  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  button {
    padding: 0.8rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: #4361ee;
    color: #fff;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }`
;

function Hero() {
  const [movie, setMovie] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    async function fetchTrendingMovies() {
      const API_KEY = import.meta.env.VITE_API_KEY;
      const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
      const response = await axios(URL);
      const firstMovie = response.data.results[0]; //mengambil data pertama
      // console.log(firstMovie)
      return firstMovie;
    }
    async function fetchDetailMovie() {
      const trendingMovie = await fetchTrendingMovies();
      const id = trendingMovie.id;
      const params = `?api_key=${API_KEY}&append_to_response=videos`;
      const URL = `https://api.themoviedb.org/3/movie/${id}${params}`;
      const response = await axios(URL);
      setMovie(response.data);
    }
    fetchDetailMovie(), fetchTrendingMovies();
  }, []);

  // useEffect(() => {
  //   async function fetchMovie() {
  //     const url = "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590";
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     setMovie(data);
  //   }

  //   fetchMovie();
  // }, []);

  return (
    <StyledHero>
      <div className="left">
        <h2>{movie.title}</h2>
        <h3>Genre: {movie.Genre}</h3>
        <p>{movie.overview}</p>
        <Button size="md" variant="primary">Watch</Button>
      </div>
      <div className="right">
        <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title} />
      </div>
    </StyledHero>
  );
}

export default Hero;