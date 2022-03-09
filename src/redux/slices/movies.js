import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   isFetchingMovieRatings: false,
   isFetchinMovieDetail: false,
   isLoading: true,
   errorFetchingMovieDetail: null,
   errorFetchingMovieRatings: null,
   successFetchingMovieDetails: null,
   successFetchingMovieRatings: null,
   ratings: {},
   movieDetail: {}
};

const moviesSlice = createSlice({
   name: 'movies-slice',
   initialState,
   reducers: {
      startFetchMovieRatings(state, action) {
         state.isLoading = false;
         state.isFetchingMovieRatings = true;
      },
      successFetchMovieRatings(state, action) {
         state.isLoading = false;
         state.isFetchingMovieRatings = false;
         state.ratings = action.payload.data;
         state.successFetchingMovieRatings = true;
         state.errorFetchingMovieRatings = null;
      },
      errorFetchMovieRatings(state, action) {
         state.isLoading = false;
         state.isFetchingMovieRatings = false;
         state.ratings = {};
         state.successFetchingMovieRatings = false;
         state.errorFetchingMovieRatings = action.payload.error;
      },
      startFetchMovieDetail(state, action) {
         state.isLoading = false;
         state.isFetchinMovieDetail = true;
      },
      successFetchMovieDetail(state, action) {
         state.isFetchinMovieDetail = false;
         state.movieDetail = action.payload.overview;
         state.successFetchMovieDetail = true;
         state.errorFetchMovieDetail = null;
      },
      errorFetchMovieDetail(state, action) {
         state.isFetchinMovieDetail = false;
         state.movieDetail = {};
         state.successFetchMovieDetail = false;
         state.errorFetchMovieDetail = action.payload.error;
      }
   }
});
const { actions, reducer } = moviesSlice;

const {
   startFetchMovieRatings,
   successFetchMovieRatings,
   errorFetchMovieRatings,
   startFetchMovieDetail,
   successFetchMovieDetail,
   errorFetchMovieDetail
} = actions;

export {
   startFetchMovieRatings,
   successFetchMovieRatings,
   errorFetchMovieRatings,
   startFetchMovieDetail,
   successFetchMovieDetail,
   errorFetchMovieDetail,
}

export default reducer;