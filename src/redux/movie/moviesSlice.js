import { createSlice } from '@reduxjs/toolkit';
import getMovies from '../../components/fetchMovies';

function getSavedMovies() {
  const savedMovies = localStorage.getItem('savedMovies');
  return savedMovies ? JSON.parse(savedMovies) : [];
}

function saveMovies(movies) {
  localStorage.setItem('savedMovies', JSON.stringify(movies));
}

const initialState = {
  movies: getSavedMovies(),
  status: 'idle',
  error: null,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers(builder) {
    builder
      .addCase(getMovies.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movies = action.payload.map((movie) => ({
          ...movie,
          reserved:
          state.movies.some((savedMovie) => savedMovie.id === movie.id
          && savedMovie.reserved),
        }));
        saveMovies(state.movies); // Save the merged movies
      })
      .addCase(getMovies.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { reserveMovie, cancelMovie } = moviesSlice.actions;
export default moviesSlice.reducer;
