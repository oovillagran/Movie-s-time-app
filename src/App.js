import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Profile from './components/Profile';
import PopularMovies from './components/PopularMovies';
import NowPlaying from './components/NowPlaying';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/popular" element={<PopularMovies />} />
          <Route path="/nowplaying" element={<NowPlaying />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
