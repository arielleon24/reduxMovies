import React from 'react';
import MovieCard from "../MovieCard/MovieCard"
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../features/movies/movieSlice';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
  
  renderMovies = movies.response === "True" ? (
    movies.search.map((movie, index) => {
      <MovieCard key={index} data={movie}/>;
    })
  ): (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
        </div>
    );
  return (
    <div className='movie-wrapper'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>{renderMovies}</div>
      </div>
    </div>
  )
;
};

export default MovieListing;