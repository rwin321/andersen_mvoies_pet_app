import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLatestMovies } from "../../api/api";

// asyn thunk
export const getPopularMovies = createAsyncThunk(
  "movies/popularMusic",
  async () => {
    try {
      const data = await getLatestMovies();
      return data.results;
    } catch (e) {
      console.log(e);
    }
  }
);

export const addMovieToFavorite = createAsyncThunk(
  "movies/addMovieToFavorite",
  async (movie) => movie
);

export const removeMovieFormFavorite = createAsyncThunk(
  "movies/removeMovieFromFavorite",
  async (movie) => movie
);

// movies reducer
export const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    popular: [],
    loading: [],
    favorite: [],
  },
  reducers: {},
  extraReducers: {
    [getPopularMovies.pending]: (state) => {
      state.loading = true;
    },
    [getPopularMovies.fulfilled]: (state, { payload }) => {
      state.popular = payload;
      state.loading = false;
    },
    [getPopularMovies.rejected]: (state, { payload }) => {
      state.popular = payload;
      state.loading = false;
    },
    [addMovieToFavorite.fulfilled]: (state, { payload }) => {
      state.favorite.push(payload);
    },
    [removeMovieFormFavorite.fulfilled]: (state, { payload }) => {
      state.favorite = state.favorite.filter(
        (movie) => movie.id !== payload.id
      );
    },
  },
});

export default moviesSlice.reducer;
