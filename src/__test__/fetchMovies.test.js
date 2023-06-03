import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import getMovies from '../components/fetchMovies';

// Create a mock Redux store
const mockStore = configureStore([thunk]);

describe('fetchMovies', () => {
  it('returns an array of movies', async () => {
    // Create a mock response with sample movie data
    const mockResponse = {
      results: [
        {
          id: 1,
          original_title: 'Movie 1',
          title: 'Movie 1',
          overview: 'Overview 1',
          poster_path: 'poster_path_1',
          top_rated: 1,
          popularity: 10,
          vote_average: 8.5,
          vote_count: 100,
          release_date: '2022-01-01',
        },
        {
          id: 2,
          original_title: 'Movie 2',
          title: 'Movie 2',
          overview: 'Overview 2',
          poster_path: 'poster_path_2',
          top_rated: 0,
          popularity: 5,
          vote_average: 7.2,
          vote_count: 50,
          release_date: '2022-02-01',
        },
      ],
    };

    // Mock the fetch function to return the sample response
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    // Create a mock Redux store with the thunk middleware
    const store = mockStore({});

    // Dispatch the getMovies action
    await store.dispatch(getMovies('popular'));

    // Get the actions dispatched to the store
    const actions = store.getActions();

    // Check if the correct action types and payload are dispatched
    expect(actions[0].type).toBe('movies/getMovies/pending');
    expect(actions[1].type).toBe('movies/getMovies/fulfilled');
    expect(actions[1].payload).toEqual([
      {
        id: 1,
        original_title: 'Movie 1',
        title: 'Movie 1',
        overview: 'Overview 1',
        poster_path: 'poster_path_1',
        top_rated: 1,
        popularity: 10,
        vote_average: 8.5,
        vote_count: 100,
        release_date: '2022-01-01',
      },
      {
        id: 2,
        original_title: 'Movie 2',
        title: 'Movie 2',
        overview: 'Overview 2',
        poster_path: 'poster_path_2',
        top_rated: 0,
        popularity: 5,
        vote_average: 7.2,
        vote_count: 50,
        release_date: '2022-02-01',
      },
    ]);

    // Check if the API endpoint was called with the correct URL
    expect(global.fetch).toHaveBeenCalledWith(
      'https://api.themoviedb.org/3/movie/popular?api_key=f1d1819ff16bbb7177fc5279dc3acaef',
    );
  });
});
