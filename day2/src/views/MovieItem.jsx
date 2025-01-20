import Rating from '@mui/material/Rating';

const MovieItem = ({ movie }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
            <h3>{movie.title}</h3>
            <p>
              <span> {movie.vote_average.toFixed(2)} </span>  
              <Rating name="read-only"  value={movie.vote_average/2} readOnly />
            </p>
        </div>
    )
}

export default MovieItem;