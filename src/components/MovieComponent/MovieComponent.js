import React from 'react';
import "./MovieComponent.css";

const Movie = (props) => {
    //console.log(props.movie);
    return(
        <div className="movie-container">
            <h1>Movie id :{ props.movie.id} </h1>
        </div>
    )
}

export default Movie;