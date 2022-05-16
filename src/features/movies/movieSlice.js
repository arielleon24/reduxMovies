import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMvies', async () => {
  const movieName = "Star Wars";
  const response = await movieApi.get(`?t&s=${movieName}&type=movie&apikey=${APIKey}`
  )
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk('Shows/fetchAsyncMvies', async () => {
  const seriesName = "Star Wars";
  const response = await movieApi.get(`?t&s=${seriesName}&type=series&apikey=${APIKey}`
  )
  return response.data;
});

const initialState = {
  movies: {}, 
  shows: {}
}

const movieSlice = createSlice({
  name: "movies", 
  initialState, 
  reducers: {
    addMovies:(state, {payload}) => {
      state.movies = payload;
    }
  }, 
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending")
    },
    [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
      console.log("fetched successfully");
      return {...state, movies: payload}
    }, 
    [fetchAsyncMovies.rejected]: () => {
      console.log("REJECTED");
    }, 
    [fetchAsyncShows.fulfilled]: (state, {payload}) => {
      console.log("fetched shows successfully");
      return {...state, shows: payload}
    }
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export default movieSlice.reducer 