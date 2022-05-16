import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi"
import { APIKey } from "../../common/apis/movieApiKey"


export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async () => {
  const movieName = "Star Wars";
  const response = await movieApi.get(`?t&s=${movieName}&type=movie&apikey=${APIKey}`
  )
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk('Shows/fetchAsyncShows', async () => {
  const seriesName = "Star Wars";
  const response = await movieApi.get(`?t&s=${seriesName}&type=series&apikey=${APIKey}`
  )
  return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('Shows/fetchAsyncMoviesOrShowDetail', async (id) => {
  const response = await movieApi.get(`?t&i=${id}&PLOT=full&apikey=${APIKey}`
  )
  console.log("log in slice", response.data)
  return response.data;
});

const initialState = {
  movies: {}, 
  shows: {}, 
  SelectedItem: {}
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
    }, 
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, {payload}) => {
      console.log("fetched details successfully");
      return {...state, SelectedItem: payload}
    }
  },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMoviesOrShow = (state) => state.movies.SelectedItem
export default movieSlice.reducer 