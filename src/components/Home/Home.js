import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"
import { useDispatch } from 'react-redux';
import { addMovies } from '../../features/movies/movieSlice';


const Home = () => {
  const movieName = "Star";
  const dispatch = useDispatch();

  useEffect(()=> {
    const fetchMovies = async () => {
      const response = await movieApi.get(`?t&s=${movieName}&type=movie&apikey=${APIKey}`
      )
      .catch((err) => {
        console.log(err)
      })
      console.log("Response from API", response.data.search)
      dispatch(addMovies(response.data))
    }

  fetchMovies()
  }, []);

  return (
    <div>
    <div className='banner-img'></div>
    <MovieListing />
    </div>
  );
};

export default Home;