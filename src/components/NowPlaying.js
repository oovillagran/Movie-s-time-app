import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMovies from './fetchMovies';

const NowPlaying = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies('nowplaying'));
  }, [dispatch]);

  return (
    <div>
      <h1>Now Playing Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default NowPlaying;
