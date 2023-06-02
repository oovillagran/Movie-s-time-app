import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const movies = useSelector((state) => state.movies.movies);
  const reservedMovies = movies.filter((movie) => movie.reserved === true);
  return (
    <div className="my-profile">
      <div>
        <h2>My Movies</h2>
        <ul>
          { reservedMovies.length > 0 ? (
            reservedMovies.map((movie) => (
              <li key={movie.id}>
                {movie.original_title}
              </li>
            ))
          ) : (
            <li>no bookings</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
