import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function TopRatedMovie() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchTopRated() {
      const response = await axios.get(ENDPOINTS.TOP_RATED);
      setMovies(response.data.results);
    }

    fetchTopRated();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Top Rated Movies" />
    </>
  );
}

export default TopRatedMovie;
