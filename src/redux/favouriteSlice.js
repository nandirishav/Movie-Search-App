import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: {
    movies: [],
    quantity: 0,
  },
  reducers: {
    addFavourite: (state, { payload }) => {
      state.quantity += 1;
      state.movies.push(payload);
    },
  },
});

export const { addFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
