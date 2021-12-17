import React from 'react';
import { Link } from 'react-router-dom';
import logo_06 from '../../assets/images/Logo_06.png'
import Countdown from '../../components/Countdown/countdown';

const Header = () => {
    return (
        <header className="App-header">
            <img src={logo_06} alt="Swift Holiday Lighting LLC. logo" className="App-logo"/>
            <Countdown/>
            <nav>
                <Link className="nav-link" to="/signup"> Sign up </Link>
                <Link className="nav-link" to="login"> Login </Link>
            </nav>
            
        </header>
    );
};

export default Header;