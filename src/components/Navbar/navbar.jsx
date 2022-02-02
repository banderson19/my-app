import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo_06 from '../../assets/images/Logo_06.png'
import './navbar.css';

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);

    const changeNavbarBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener('scroll', changeNavbarBackground);

    return (
        <nav id="navbar" className={navbar ? 'navbar active fixed-top navbar-expand-lg navbar-dark bg-dark' : 'navbar fixed-top navbar-expand-lg navbar-dark'}>
            <div className="container">
                <div className="navbar-links_logo">
                    <img src={logo_06} alt="Swift Holiday Lighting LLC. logo" />
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#slideshow">Our work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact & About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#review">Reviews</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;