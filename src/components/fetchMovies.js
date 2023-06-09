import { createAsyncThunk } from '@reduxjs/toolkit';

const API_KEY = 'f1d1819ff16bbb7177fc5279dc3acaef';

const getCategoryUrl = (category) => {
  switch (category) {
    case 'popular':
      return `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    case 'nowplaying':
      return `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    case 'toprated':
      return `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`;
    case 'upcoming':
      return `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`;
    default:
      return '';
  }
};

const getMovies = createAsyncThunk('movies/getMovies', async (category) => {
  const url = getCategoryUrl(category);
  const response = await fetch(url);
  const data = await response.json();
  return data.results.map((movie) => ({
    id: movie.id,
    original_title: movie.original_title,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    top_rated: movie.top_rated,
    popularity: movie.popularity,
    vote_average: movie.vote_average,
    vote_count: movie.vote_count,
    release_date: movie.release_date,
  }));
});

export default getMovies;
