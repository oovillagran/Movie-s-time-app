import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMovies from './fetchMovies';
import '../styles/Movie.css';
import { reserveMovie, cancelMovie } from '../redux/movie/moviesSlice';
import Hero from '../assets/Hero.jpg';
import PopularImg from '../assets/Popular.jpg';
import NowPlayingImg from '../assets/NowPlaying.jpg';
import TopRatedImg from '../assets/TopRated.jpg';
import UpcomingImg from '../assets/Upcoming.jpg';

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
      <div className="hero flex-column" style={{ backgroundImage: `url(${Hero})` }}>
        <p className="hero-text">Wath the Best Movies At The Moment</p>
      </div>
      <div className="search-field flex">
        <p className="search-text">Filter by Category</p>
        <input
          className="search-input"
          placeholder="search by category"
          value=""
          type="text"
        />
      </div>
      <section className="movie-categories">
        <div className="grid-movies-section">
          <div className="movie-background flex-column popular" style={{ backgroundImage: `url(${PopularImg})` }}>
            <button type="button" className="movie-category">Popular</button>
          </div>
          <div className="movie-background flex-column nowplaying" style={{ backgroundImage: `url(${NowPlayingImg})` }}>
            <button type="button" className="movie-category">Now Playing</button>
          </div>
          <div className="movie-background flex-column toprated" style={{ backgroundImage: `url(${TopRatedImg})` }}>
            <button type="button" className="movie-category">Top Rated</button>
          </div>
          <div className="movie-background flex-column upcomming" style={{ backgroundImage: `url(${UpcomingImg})` }}>
            <button type="button" className="movie-category">Upcoming</button>
          </div>
        </div>
      </section>

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
