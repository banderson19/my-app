import React from 'react';
import { Link } from 'react-router-dom';
import logo_06 from '../../assets/images/Logo_06.png'
import './navbar.css';

const Navbar = () => {
    return (        
        <div className="navbar">
            <div className="navbar-links">
                <div className="navbar-links_logo">
                    <img src={logo_06} alt="Swift Holiday Lighting LLC. logo"/>
                </div>
                <div className="navbar-links_container">
                    <p><a href="#form">quote</a></p>
                    <p><a href="#slideshow">Our work</a></p>
                    <p><a href="#review">Reviews</a></p>
                </div>
            </div>            
            <div className="navbar-sign">
                <Link className="nav-link" to="/signup"> Sign up </Link>
                <Link className="nav-link" to="login"> Login </Link>
            </div>
        </div>
    );
};

export default Navbar;