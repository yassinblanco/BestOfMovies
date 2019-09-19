import React, {Component} from 'react';
import Carousel from './CarouselComponent/CarouselComponent';
import Movies from "../MoviesComponent/MoviesComponent";
import './HomeComponent.css';
import {Route,Redirect,Switch,Link} from "react-router-dom";

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
            <Link className="filter" to={{ pathname: "/movies", search: "?filter="+item.name }}>{item.name}</Link>            
        )
   }); 
   return RenderRow(arr);
}
const Carousels = ({movies}) => {
    return(
        <React.Fragment>
            <Carousel 
                movies = {[...movies].sort((a,b) => a.year < b.year ? 1 : -1)}
                title = {"Newest Movies"}
            />
            <Carousel 
                movies = {[...movies].sort((a,b) => a.rate < b.rate ? 1 : -1)}
                title = {"Top Rated Movies"}
            />
        </React.Fragment>
    )
}

const MoviesWithFilter = ({search}) =>{
    const searchParams = new URLSearchParams(search);
    
    if(searchParams.has("filter"))
       return <Movies filter={searchParams.get("filter")} />    
    else
       return <div>404 NOT FOUND!</div>
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
        console.log(this.props); 
        return(
            <div className="home-container">
                <div className={toggle ? "filters-container filters-container-md": "filters-container" }>
                    <div className="toggle-button">
                        {toggle ? <i className="fa fa-bars" onClick={this.onToggle} aria-hidden="true"></i> 
                        : <i className="fa fa-times" onClick={this.onToggle} aria-hidden="true"></i>}
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
                    <Switch>
                        <Route exact path="/" component={() => <Carousels movies = {this.props.movies}/>  }/>
                        <Route path="/movies" component={({location}) => <MoviesWithFilter search={location.search}/>} />
                        <Redirect to="/"/>
                    </Switch>
                      
                </div>
            </div>
        );
    }
}

export default Home;