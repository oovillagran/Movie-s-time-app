import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getMovies from './fetchMovies';
import BackIcon from '../assets/backIcon.png';

const PopularMovies = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies('popular'));
  }, [dispatch]);

  return (
    <div>
      <div className="flex category-header">
        <NavLink className="back-btn flex" to="/">
          <img className="back-icon icon" src={BackIcon} alt="back-icon" />
          <p className="back-text">Back</p>
        </NavLink>
        <h1 className="category-title">Popular Movies</h1>
      </div>
      <ul className="movie-card-section">
        {movies.map((movie) => (
          <li className="movie-card" key={movie.id} data-testid="movie-card">
            <hr className="card-line" />
            <p className="movie-name">
              <span style={{ fontWeight: 'bold' }}>
                Movie Title:
              </span>
              {' '}
              {movie.title}
            </p>
            <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />
            <p className="movie-popularity">
              <span style={{ fontWeight: 'bold' }}>
                Popularity:
              </span>
              {' '}
              {movie.popularity}
            </p>
            <p className="movie-vote-average">
              <span style={{ fontWeight: 'bold' }}>
                Vote Average:
              </span>
              {' '}
              {movie.vote_average}
            </p>
            <p className="movie-date">
              <span style={{ fontWeight: 'bold' }}>
                Release Date:
              </span>
              {' '}
              {movie.release_date}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularMovies;
