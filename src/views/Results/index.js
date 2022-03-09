import { useParams } from "react-router";
import { useNavigate } from 'react-router';

import moviesImage from '../../assets/movie-theater.png';
import Loading from "../../componentes/Loading";
import { useFetchMoviesQuery } from "../../redux/api/movies";

import List from "./components/List";

const Results = () => {
   const { title } = useParams();
   const navigate = useNavigate();
   const { data: movies, isLoading, isSuccess, isFetching, error } = useFetchMoviesQuery(title);

   const handleListItemClick = (movieId) => {
      console.log(movieId);
      navigate(`/detail/${movieId}`);
   }
   //console.log(movies)
   const renderContent = () => {
      if (error) {
         return (
            <div className="flex items-center justify-center h-full">
               <p className="text-xl">{Error.error}</p>
            </div>
         )
      } else if (isLoading || isFetching) {
         return <Loading message="BUscando peliculas..." />
      } else if (isSuccess && movies?.results) {
         return <List data={movies?.results} onListItemClick={handleListItemClick} />
      }
   }


   return (
      <div className="flex flex-row">
         <div className="w-3/5 h-screen overflow-y-auto px-10">
            {renderContent()}
         </div>
         <div className="w-2/5">
            <img src={moviesImage} alt="Movies" className="w-full h-screen object-cover" />
         </div>
      </div>
   );
};

export default Results;