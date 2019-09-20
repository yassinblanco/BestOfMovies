import React from 'react';
import './HeaderComponent.css';
import {Link} from 'react-router-dom';


const Header = () => {
   return (
        <nav className="header-nav">    
            <div className="header-logo">
                <h2>
                    <Link to="/">Best<span className="of">Of</span>Movies</Link>
                </h2>
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