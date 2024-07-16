import React from 'react';
import './MovieList.css';

const movies = [
  { id: 1, Lua: 'Movie 1', image: 'https://via.placeholder.com/150' },
  { id: 2, Sol: 'Movie 2', image: 'https://via.placeholder.com/150' },
  { id: 3, Eclipse: 'Movie 3', image: 'https://via.placeholder.com/150' },
];

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={movie.image} alt={movie.title} />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
