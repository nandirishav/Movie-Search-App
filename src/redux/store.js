import { configureStore, combineReducers } from "@reduxjs/toolkit";
import moviesReducer from "./movieSlice";
import favouritesReducer from "./favouriteSlice";

const rootReducer = combineReducers({
  movies: moviesReducer,
  favourite: favouritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
