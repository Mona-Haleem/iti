import axios from "axios"
import MovieModel from "../models/MovieModel";

class MovieController {
    static async getMovies() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d7e1dc8ea3070ef5a08b55c67b10512b');
            return response.data.results.map(movie => new MovieModel(movie.id, movie.title, movie.poster_path, movie.vote_average))
        } catch (err) {
            console.log("Error", err);

        }
    }

    static async getMovie(movieId,imgOrientation) {
        try {
         

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=d7e1dc8ea3070ef5a08b55c67b10512b`);
            const {id,title,vote_average} = response.data
            const img = (imgOrientation == 'landscape')?response.data.backdrop_path:response.data.poster_path
            return new MovieModel(id,title,img,vote_average)

        } catch (err) {
            console.log("Error", err);

        }
    }
}


export default MovieController; 