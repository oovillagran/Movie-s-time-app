import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { MemoryRouter } from 'react-router';
import UpcomingMovies from '../components/Upcoming';

// Create a mock Redux store
const mockStore = configureStore([thunk]);
const store = mockStore({
  movies: {
    movies: [
      {
        id: 1,
        title: 'Movie 1',
        poster_path: 'poster1.jpg',
        overview: 'Overview 1',
        vote_average: 7.5,
        release_date: '2023-01-01',
      },
      {
        id: 2,
        title: 'Movie 2',
        poster_path: 'poster2.jpg',
        overview: 'Overview 2',
        vote_average: 8.0,
        release_date: '2023-02-01',
      },
    ],
  },
});

test('renders movie cards correctly', () => {
  const { getAllByTestId } = render(
    <Provider store={store}>
      <MemoryRouter>
        <UpcomingMovies />
      </MemoryRouter>
    </Provider>,
  );

  // Verify if the movie cards are rendered correctly
  const movieCards = getAllByTestId('movie-card');
  expect(movieCards.length).toBe(2);
});
