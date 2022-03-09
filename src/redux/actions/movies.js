import { createAction } from "@reduxjs/toolkit";

//importar actions de slices, solo para cuestiones demostrativas
import {
   startFetchMovieRatings as startFetchMovieRatingsSlice,
   successFetchMovieRatings as successFetchingMovieRatingsSlice,
   errorFetchMovieRatings as errorFetchingMovieRatingsSlice,
   startFetchMovieDetail as startFetchMovieDetailSlice,
   successFetchMovieDetail as successFetchMovieDetailSlice,
   errorFetchMovieDetail as errorFetchMovieDetailSlice
} from '../slices/movies'

const BASE_URL = "https://advanced-movie-search.p.rapidapi.com";
const headers = {
   'x-rapidapi-host': 'advanced-movie-search.p.rapidapi.com',
   'x-rapidapi-key': 'fc6660b0f5mshe0624d3f4998bf6p1edad5jsnba5d1883e138'
}

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCES_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async (dispatch) => {
   try {
      dispatch(startFetchMovieRatings());
      // iniciar la llamada API
      const response = await fetch(`${BASE_URL}/movies/getdetails?movie_id=${movieId}`, {
         "method": "GET",
         headers
      });
      const data = await response.json();
      //console.log(data);
      dispatch(successFetchMovieRatings({ data }));
   } catch (error) {
      dispatch(errorFetchMovieRatings({ error }));
   }
};
export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');
export const fetchMovieDetail = (movieId) => async (dispatch) => {
   try {
      //dispatch(startFetchMovieDetail());
      dispatch(startFetchMovieDetailSlice())
      const overviewDetailsResponse = await fetch(`${BASE_URL}/movies/getdetails?movie_id=${movieId}`, {
         "method": "GET",
         headers
      });
      const overviewDetailsData = await overviewDetailsResponse.json();
      //
      //dispatch(successFetchMovieDetail({ overview:overviewDetailsData }));
      dispatch(successFetchMovieDetailSlice({ overview: overviewDetailsData }))
   } catch (error) {
      //dispatch(errorFetchMovieDetail({ error }));
      dispatch(errorFetchMovieDetailSlice({ error }))
   }
}