import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing"
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"


const Home = () => {

  useEffect(()=> {
    const movieName = "Star";
    const fetchMovies = async () => {
      const response = await movieApi.get(`?t&s=${movieName}&type=movie&apikey=${APIKey}`
      )
      .catch((err) => {
        console.log(err)
      })
      console.log("Response from API", response)
      // console.log(movieApi)
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