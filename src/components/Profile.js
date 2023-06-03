import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMovies from './fetchMovies';
import '../styles/Movie.css';
import { reserveMovie, cancelMovie } from '../redux/movie/moviesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.movies); // Access 'movies' correctly
  const status = useSelector((state) => state.movies.status); // Access 'status' correctly

  const handleReserveMovie = (movieId) => {
    dispatch(reserveMovie(movieId));
  };
  const handleCancelMovie = (movieId) => {
    dispatch(cancelMovie(movieId));
  };

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error occurred while fetching movies.</div>;
  }

  return (
    <div>
      {movies?.map((movie) => (
        <div className="movie flex" key={movie.id}>
          <img className="movie-img" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie_image" />
          <div className="movie-information">
            <h2 className="movie-name">{movie.original_title}</h2>
            <h3 className="movie-type">{movie.overview}</h3>
            {movie.reserved ? (
              <p className="movie-description">
                <button className="reserve-badge" type="button">reserved</button>
                {movie.title}
              </p>
            ) : (
              <p className="movie-description">{movie.title}</p>
            )}
            {!movie.reserved
              ? <button className="reserve-btn" type="button" onClick={() => handleReserveMovie(movie.id)}>reserve Movie</button>
              : <button className="reserve-btn cancel" type="button" onClick={() => handleCancelMovie(movie.id)}>cancel reservation</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
