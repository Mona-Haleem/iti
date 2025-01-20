import React, { Component } from "react";
import MovieController from "../controllers/MovieController";
import MovieItem from "./MovieItem";

class MovieList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            loading: true,
            error: null,
        }
    }

    componentDidMount() {
        this.fetchMovies();
    }

    fetchMovies = async () => {
        try {
            const movies = await MovieController.getMovies();
            this.setState({ movies, loading: false })
        } catch (error) {
            console.log(error);
            this.setState({ error, loading: false, })
        }
    }


    render() {
        const { movies, loading, error } = this.state;

        if (loading) {
            return <h1>Loading...</h1>
        }

        if (error) {
            return <h1>Something went wrong</h1>
        }
        return (
            <div className="newRelease">
                {movies.map(movie => <MovieItem key={movie.id} movie={movie} />)}
            </div>
        )


    }

}

export default MovieList;