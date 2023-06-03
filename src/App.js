import React from 'react';
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import PopularMovies from './components/PopularMovies';
import NowPlaying from './components/NowPlaying';
import UpcomingMovies from './components/Upcoming';
import TopRated from './components/TopRated';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
          <Route path="/upcoming" element={<UpcomingMovies />} />
          <Route path="/toprated" element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
