import React , {Component} from 'react';
import './MainComponent.css';
import Header from '../HeaderComponent/HeaderComponent';
import Home from '../HomeComponent/HomeComponent';
import Footer from '../FooterComponent/FooterComponent';


class Main extends Component{

    render(){
        return(
            <div className="main-container">
                <Header />
                <Home />
                <Footer />
            </div>
        );
    }

}

export default Main;