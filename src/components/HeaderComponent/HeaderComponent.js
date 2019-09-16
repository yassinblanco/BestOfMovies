import React from 'react';
import './HeaderComponent.css';


const Header = () => {
   return (
        <nav className="header-nav">
            <div className="header-logo">
                <h2>Best<span className="of">Of</span>Movies</h2>
            </div>
            <form className="header-form">
                <input type="text" name="search" placeholder="Search..."/>
                <button type="submit">
                   <i className="fa fa-search" aria-hidden="true"></i>
                </button>
            </form>
            <button className="header-login" type="button">
                Login <i className="fa fa-sign-in" aria-hidden="true"></i>
            </button>
        </nav>
   );
}

export default Header;