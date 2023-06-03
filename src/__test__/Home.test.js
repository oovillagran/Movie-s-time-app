import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Home from '../components/Home';
import getMovies from '../components/fetchMovies';

jest.mock('react-redux', () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
}));
jest.mock('../components/fetchMovies', () => jest.fn());

describe('Testing Home Component', () => {
  const mockDispatch = jest.fn();
  const mockSelector = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selectorFn) => selectorFn({ movies: { status: 'idle' } }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state when movies are being fetched', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ movies: { status: 'loading' } }));

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const loadingElement = screen.getByText('Loading...');
    expect(loadingElement).toBeTruthy();
  });

  test('renders error state when movies fecth fails', () => {
    useSelector.mockImplementation((selectorFn) => selectorFn({ movies: { status: 'failed' } }));

    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const errorElement = screen.getByText('Error occurred while fetching movies.');
    expect(errorElement).toBeTruthy();
  });

  test('renders movies categories when fetchind data is successfully', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>,
    );

    const categoryButtons = screen.getAllByRole('button', { name: /^Popular$|^Nowplaying$|^Toprated$|^Upcoming$/ });
    expect(categoryButtons.length).toBe(4);
  });
});
