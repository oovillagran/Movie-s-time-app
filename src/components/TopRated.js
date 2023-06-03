import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import getMovies from './fetchMovies';
import BackIcon from '../assets/backIcon.png';

const TopRated = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies);

  useEffect(() => {
    dispatch(getMovies('toprated'));
  }, [dispatch]);

  return (
    <div>
      <div className="flex category-header">
        <NavLink className="back-btn flex" to="/">
          <img className="back-icon icon" src={BackIcon} alt="back-icon" />
          <p className="back-text">Back</p>
        </NavLink>
        <h1 className="category-title">Top Rated Movies</h1>
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
            <p className="movie-vote">
              <span style={{ fontWeight: 'bold' }}>
                Number of votes:
              </span>
              {' '}
              {movie.vote_count}
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
            <p className="movie-overview">
              <span style={{ fontWeight: 'bold' }}>
                Overview
              </span>
              {' '}
              {movie.overview}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopRated;
