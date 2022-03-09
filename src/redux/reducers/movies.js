import {
   startFetchMovieRatings,
   successFetchMovieRatings,
   errorFetchMovieRatings,
   startFetchMovieDetail,
   successFetchMovieDetail,
   errorFetchMovieDetail
} from '../actions/movies';
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
const MoviesReducer = (state = initialState, action) => {
   //console.log(state, action)
   switch (action.type) {
      case startFetchMovieRatings.toString():
         return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: true,
         };
      case successFetchMovieRatings.toString():
         return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: false,
            ratings: action.payload.data,
            successFetchingMovieRatings: true,
            errorFetchingMovieRatings: null
         };
      case errorFetchMovieRatings.toString():
         return {
            ...state,
            isLoading: false,
            isFetchingMovieRatings: false,
            ratings: {},
            successFetchingMovieRatings: false,
            errorFetchingMovieRatings: action.payload.error
         };
      case startFetchMovieDetail.toString():
         return {
            ...state,
            isLoading:false,
            isFetchinMovieDetail: true,
         };
      case successFetchMovieDetail.toString():
         return {
            ...state,
            isFetchinMovieDetail: false,
            movieDetail: action.payload.overview,
            successFetchMovieDetail: true,
            errorFetchMovieDetail: null,
         };
      case errorFetchMovieDetail.toString():
         return {
            ...state,
            isFetchinMovieDetail: false,
            movieDetail: {},
            successFetchMovieDetail: false,
            errorFetchMovieDetail: action.payload.error,
         };
      default:
         return state;
   }
};

export default MoviesReducer;