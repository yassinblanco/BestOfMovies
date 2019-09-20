import React from 'react';
import "./MovieComponent.css";

const Movie = ({movie}) => {
    
    return(
        <div className="movie-container">
            <h2 className="movie-title">{movie.name} </h2>                        
            <table style={{maxWidth:"800px", width:"100%", margin:"0 auto"}}>
                <tbody >
                    <tr>
                        <td>Title</td>
                        <td>{movie.name}</td>
                    </tr>
                    <tr>
                        <td>Image</td>
                        <td>
                            <img  src={"http://localhost:3000/"+movie.image} alt={movie.name} />
                        </td>
                    </tr>
                    <tr>
                        <td>Year</td>
                        <td>{movie.year}</td>
                    </tr>
                    <tr>
                        <td>Genre</td>
                        <td>{movie.genre}</td>
                    </tr>
                    <tr>
                        <td>Director</td>
                        <td>{movie.director}</td>
                    </tr>
                    <tr>
                        <td>Rate</td>
                        <td>{movie.rate}</td>
                    </tr>                   
                </tbody>
            </table>             
        </div>
    )
}

export default Movie;