import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getMovies from './fetchMovies';
import BackIcon from '../assets/backIcon.png';

const UpcomingMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies('upcoming'));
  }, [dispatch]);

  return (
    <div>
      <div className="flex category-header">
        <NavLink className="back-btn flex" to="/">
          <img className="back-icon" src={BackIcon} alt="back-icon" />
          <p className="back-text">Back</p>
        </NavLink>
        <h1>Upcoming Movies</h1>
      </div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <p className="movie-name">{movie.title}</p>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
            <p className="movie-overview">
              Overview:
              {' '}
              {movie.overview}
            </p>
            <p className="movie-date">
              Release Date:
              {' '}
              {movie.release_date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMovies;
