import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies"; 
import ENDPOINTS from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function PopularMovie() {
  // const [movies, setMovies] = useState([]);
  const {setMovies} = useContext(MoviesContext);

useEffect(function()  {
  async function fetchPopularMovie() {
    // const API_KEY = import.meta.env.VITE_API_KEY;
    // const URL = https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY};
    // const response = await axios.get(URL);

    const response = await axios.get(ENDPOINTS.POPULAR);
    setMovies(response.data.results);
    // console.log(response.data.results);
  }


  fetchPopularMovie();
}, []);

  return (
    <>
      <Hero />
      <Movies title ="Popular Movies" />
    </>
  );
}

export default PopularMovie;
