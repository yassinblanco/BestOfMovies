import React, {Component} from 'react';
import Carousel from './CarouselComponent/CarouselComponent';
import './HomeComponent.css';

function RenderRow(arr){
    let i = 0; const result = [];
    while( i <= arr.length - 2){
         const row = <div key={i} className="filter-row">
             {arr[i]}
             {arr[i+1]}
         </div>
         result.push(row);
         i+= 2;
    }
    return result;
}

const RenderFilters = ({items}) => {
   const arr = items.map( item => {
        return(
            <a  key={item.id} className="filter" href={`/${item.name}`}>{item.name}</a>
        )
   }); 
   return RenderRow(arr);
}

function RenderNewestMovies(movies){
    return movies.filter(movie => movie.new);
}

class Home   extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggle : true
        }
    }

    onToggle = () => {
             
        this.setState({toggle : !this.state.toggle});
    }
    
    render(){
        const {toggle} = this.state;
         
        return(
            <div className="home-container">
                <div className={toggle ? "filters-container filters-container-md": "filters-container" }>
                    <div className="toggle-button">
                        {toggle ? <i className="fa fa-bars" onClick={this.onToggle} aria-hidden="true"></i> 
                        : <i class="fa fa-times" onClick={this.onToggle} aria-hidden="true"></i>}
                    </div>                                    
                    <div className={toggle ? "filter-container filter-container-md": "filter-container" }>
                        <h4 className="filter-title">Countries :</h4>                        
                         <RenderFilters items={this.props.countries} />
                    </div>
                    <div className={toggle ? "filter-container filter-container-md": "filter-container" }>
                        <h4 className="filter-title">Genres :</h4>
                        <RenderFilters items={this.props.genres} />                        
                    </div>
                </div>
                <div className="movies-container">
                <Carousel newestMovies = {RenderNewestMovies(this.props.movies)}/>
                </div>
            </div>
        );
    }
}

export default Home;