import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router";
import Loading from '../../componentes/Loading';

import { fetchMovieDetail, fetchMovieRatings } from "../../redux/actions/movies";
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const Detail = () => {
   const { movieId } = useParams();
   const dispatch = useDispatch();
   const {
      isFetchingMovieRatings,
      isFetchinMovieDetail,
      isLoading,
      errorFetchingMovieDetail,
      errorFetchingMovieRatings,
      ratings,
      movieDetail
   } = useSelector((state) => state.moviesReducerSlice);

   const state = useSelector((state) => state);
   console.log(state);

   useEffect(() => {
      //dispatch(fetchMovieRatings(movieId));
      dispatch(fetchMovieDetail(movieId))
   }, [dispatch, movieId]);

   const renderContent = () => {
      if (isLoading || isFetchinMovieDetail || isFetchingMovieRatings) {
         <Loading message="Obteniendo informacion de la pelicula..." />
      } else if (errorFetchingMovieDetail || errorFetchingMovieRatings) {
         return <p>Ha ocurrido un erro al obtener la informacion de la pelicula</p>
      }
      return (
         <>
            <LeftContainer imageUrl={movieDetail?.poster_path} />
            <RightContainer
               title={movieDetail?.original_title ?? 'Sin titulo'}
               year={movieDetail?.release_date ?? 'No disponible'}
               rating={movieDetail?.vote_average}
               synopsis={movieDetail?.overview ?? 'No disponible'}
               genres={movieDetail?.genres}
               cast={movieCast}
            />
         </>
      );
   }


   //console.log(movieDetail);
   const movieCast = movieDetail?.fullCredits?.cast?.slice(0 - 20) ?? []
   return (
      <div className='flex flex-row px-16 h-screen items-center justify-center'>
         {renderContent()}

      </div>
   );
};

export default Detail;