import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getMovies from './fetchMovies';
import '../styles/Movie.css';
import Hero from '../assets/Hero.jpg';
import Popular from '../assets/popular.jpg';
import Nowplaying from '../assets/nowplaying.jpg';
import Toprated from '../assets/toprated.jpg';
import Upcoming from '../assets/upcoming.jpg';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector((state) => state.movies.status); // Access 'status' correctly
  const [filter, setFilter] = useState('');

  useEffect(() => {
    dispatch(getMovies('popular'));
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error occurred while fetching movies.</div>;
  }

  const categories = [
    { name: 'popular', image: Popular },
    { name: 'nowplaying', image: Nowplaying },
    { name: 'toprated', image: Toprated },
    { name: 'upcoming', image: Upcoming },
  ];

  const filteredCategories = categories.filter(
    (category) => category.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const handleInputChange = (event) => {
    setFilter(event.target.value);
  };

  const handleCategoryClick = (categoryName) => {
    navigate(`/${categoryName}`);
  };

  return (
    <div>
      <div className="hero flex-column" style={{ backgroundImage: `url(${Hero})` }}>
        <p className="hero-text">
          Welcome to a collection of the finest films
          spanning from the past, present, and even the future.
        </p>
      </div>
      <div className="search-field flex">
        <p className="search-text">Filter by Category</p>
        <input
          className="search-input"
          placeholder="search by category"
          value={filter}
          onChange={handleInputChange}
          type="text"
        />
      </div>
      <section className="movie-categories">
        <div className="grid-movies-section">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => (
              <div
                key={category.name}
                className={`movie-background flex-column ${category.name}`}
                style={{ backgroundImage: `url(${category.image})` }}
              >
                <button
                  type="button"
                  className={`movie-category btn-${category.name}`}
                  id={`btn-${category.name}`}
                  key={`btn-${category.name}`}
                  onClick={() => handleCategoryClick(category.name)}
                >
                  {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                </button>
              </div>
            ))
          ) : (
            <div>No categories found.</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
