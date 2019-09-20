import React from 'react';
import "./MoviesComponent.css";
import {Link} from "react-router-dom";



const RenderMovies = ({movies, filter}) => {    
    return movies.filter(movie => (filter === movie.country) || (filter === movie.genre))
           .map( movie => {
         return (
           <div key={movie.id} className="grid-item">
              <Link className="grid-item-link" to={`/movies/${movie.id}`}> 
                <img className="grid-item-image" src={movie.image} alt={movie.name} />
                <h4 className="grid-item-title">{movie.name}</h4>
              </Link>
           </div>
        );
    });
}

const Movies = (props) => {
    let title = "";
    switch(props.filter){
        case "Japan":
          title = "Japanese Movies";
        break;
        case "Korea":
            title = "Korean Movies";
        break;
        case "India":
            title = "Indian Movies";
         break;
        case "Argentina":
            title = "Argentian Movies";
            break;
        case "Iran":
            title = "Iranian Movies";    
            break;
        case "Italy":
            title = "Italian Movies";
            break;
        case "Us":
            title = "Us Movies";
            break;
        case "Spain":
            title = "Spanish Movies";
            break;
        case "Deutshland":
            title= "Deutsh Movies";
            break;
        case "France":
            title = "Frensh Movies";
            break;    
        case "Action":
            title = "Action Movies";
            break;
        case "Adventure":
            title = "Adventure Movies";
            break;
        case "Drama":
            title = "Drama Movies";
            break; 
        case "Thriller":
            title = "Thriller Movies";
            break;
        case "Romance":
            title = "Romance Movies";
            break;
        case "Comedy":
            title = "Comedy Movies";
            break;         
        default:
            break;  
    }
     
    return(
        <React.Fragment>
            <h2 className="grid-title">{title}</h2>
            <div className="movies-grid">
                <RenderMovies movies={props.movies} filter={props.filter} />
            </div> 
        </React.Fragment>
       
    );
}

export default Movies;