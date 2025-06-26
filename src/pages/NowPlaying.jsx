import { useContext, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import ENDPOINTS from "../utils/constans/endpoint";
import MoviesContext from "../components/context/MoviesContext";

function NowPlaying() {
  const { setMovies } = useContext(MoviesContext);

  useEffect(() => {
    async function fetchNowPlaying() {
      const response = await axios.get(ENDPOINTS.NOW_PLAYING);
      setMovies(response.data.results);
    }

    fetchNowPlaying();
  }, []);

  return (
    <>
      <Hero />
      <Movies title="Now Playing" />
    </>
  );
}

export default NowPlaying;
