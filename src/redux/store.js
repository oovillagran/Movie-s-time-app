import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movie/moviesSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
  },
});

export default store;
