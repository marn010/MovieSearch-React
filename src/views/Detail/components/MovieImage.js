const MovieImage = ({ url }) => (
   <div className='w-1/3 flex justify-center'>
      <img src={url} alt='movie-detail' className='w-80' />
   </div>
)

export default MovieImage;