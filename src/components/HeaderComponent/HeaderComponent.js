import React from 'react';
import './HeaderComponent.css';


const Header = () => {
   return (
        <nav className="header-nav">
            <div className="header-logo">
                <h2>BestOfMovies</h2>
            </div>
            <form className="header-form">
                <input type="text" name="search" placeholder="Search..."/>
                <button type="submit">
                   <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
            <button className="header-login" type="button">
                Login
            </button>
        </nav>
   );
}

export default Header;