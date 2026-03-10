import React from 'react';
import './DisneyWatchlist.css';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import WatchlistHeader from './WatchlistHeader';
import { MovieProvider } from './context/MovieContext';


const DisneyWatchlist: React.FC = () => {


  return (
    <div className="disney-watchlist">
      <h1>My Disney Watchlist</h1>
      <MovieProvider>
        <WatchlistHeader />
        <MovieForm />
        <MovieList />
      </MovieProvider>
    </div>
  );
};

export default DisneyWatchlist;
