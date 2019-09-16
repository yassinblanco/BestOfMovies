import React, {Component} from 'react';
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

class Home   extends Component{
    
    render(){
        //console.log(this.props.countries);
        //console.log(RenderCountries(this.props.countries));
        return(
            <div className="home-container">
                <div className="filters-container">
                    <div className="filter-container">
                        <h4 className="filter-title">Countries :</h4>                        
                         <RenderFilters items={this.props.countries} />
                    </div>
                    <div className="filter-container">
                        <h4 className="filter-title">Genres :</h4>
                        <RenderFilters items={this.props.genres} />                        
                    </div>
                </div>
                <div className="movies-container"></div>
            </div>
        );
    }
}

export default Home;