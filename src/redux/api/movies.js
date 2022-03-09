import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const headers = {
   "x-rapidapi-host": "advanced-movie-search.p.rapidapi.com",
   "x-rapidapi-key": "fc6660b0f5mshe0624d3f4998bf6p1edad5jsnba5d1883e138"
}

export const moviesApi = createApi({
   reducerPath: 'moviesApi',
   baseQuery: fetchBaseQuery({ baseUrl: 'https://advanced-movie-search.p.rapidapi.com' }),
   endpoints: (builder) => ({
      fetchMovies: builder.query({
         query: (title) => ({
            url: `search/movie?query=${title}`,
            method: 'GET',
            headers
         })
      })
   })
});

export const { useFetchMoviesQuery } = moviesApi;