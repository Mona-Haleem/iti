import { useEffect, useState } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";

const Banner = () => {
    let [movie, setMovie] = useState(null)
    
    useEffect(()=>{ 
        updateMovie();
    },[])

    const updateMovie = async() =>{
        movie =  await MovieController.getMovie(1062807,'landscape');
        setMovie(movie)
        console.log(movie)
     }

    return (
        <div className="bannerContainer">
                <h2>Explore</h2>
                <p>what are you gonna watch today ?</p>
                <div className="banner">
                    {movie && <MovieItem   key={movie.id} movie={movie} />}
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est quibusdam enim cumque, assumenda ipsum temporibus ipsa, maiores ipsam, delectus incidunt quod? </p>
                </div>
        </div>
    )
}

export default Banner;