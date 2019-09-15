import React, {Component} from 'react';
import './HomeComponent.css';

class Home   extends Component{

    render(){
        return(
            <div className="home-container">
                <div className="filters-container">
                    <div className="countries-container">
                        <h4 className="countries-title">Countries :</h4>                        
                        <div className="filters-row">
                            <a className="country" href="/japan">Japan</a>
                            <a className="country" href="/korea">Korea</a>
                        </div>
                        <div className="filters-row">
                            <a className="country" href="/India">India</a>
                            <a className="country" href="/Argentina">Argentina</a>
                        </div>
                        <div className="filters-row">
                            <a className="country" href="/spain">Spain</a>
                            <a className="country" href="/france">France</a>
                        </div>
                        <div className="filters-row">
                            <a className="country" href="/us">Us</a>
                            <a className="country" href="/italy">Italy</a>
                        </div>
                    </div>
                    <div className="genres-container">
                        <h4 className="genres-title">Genres :</h4>                        
                    </div>
                </div>
                <div className="movies-container"></div>
            </div>
        );
    }
}

export default Home;