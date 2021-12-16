import React from 'react';
import { Link } from 'react-router-dom';
import logo_01 from '../../assets/images/Logo_01.png'

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo_01} alt="Swift Holiday Lighting LLC. logo" className="App-logo"/>
            <nav>
                <Link className="nav-link" to="/signup"> Sign up </Link>
                <Link className="nav-link" to="login"> Login </Link>
            </nav>
            
        </header>
    );
};

export default Header;