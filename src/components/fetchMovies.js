import { createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://api.themoviedb.org/3/movie/popular?api_key=f1d1819ff16bbb7177fc5279dc3acaef';

const getMovies = createAsyncThunk('movies/getMovies', async () => {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.results);
  return data.results.map((movie) => ({
    id: movie.id,
    original_title: movie.original_title,
    title: movie.title,
    overview: movie.overview,
    poster_path: movie.poster_path,
    reserved: false,
  }));
});

export default getMovies;
