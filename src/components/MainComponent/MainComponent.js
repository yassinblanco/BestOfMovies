import React , {Component} from 'react';
import './MainComponent.css';
import Header from '../HeaderComponent/HeaderComponent';
import Home from '../HomeComponent/HomeComponent';
import Footer from '../FooterComponent/FooterComponent';
import {COUNTRIES} from "../../shared/countries";
import {GENRES} from "../../shared/genres";


class Main extends Component{

    constructor(props){
        super(props);
        this.state = {
            countries: COUNTRIES,
            genres: GENRES
        }
    }

    render(){
        
        return(
            <div className="main-container">
                <Header />
                <Home countries={this.state.countries} genres={this.state.genres}/>
                <Footer />
            </div>
        );
    }

}

export default Main;