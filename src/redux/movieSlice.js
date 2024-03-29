import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async()=>{

// })

const initialState = {
  movies: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
  },
});

//export the actions and the reducer
export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
