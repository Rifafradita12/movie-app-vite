const API_KEY = import.meta.env.VITE_API_KEY;

const ENDPOINTS = {
  POPULAR: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
  NOW_PLAYING: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`,
  TOP_RATED: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
};

export default ENDPOINTS;
