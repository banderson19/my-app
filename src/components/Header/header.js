import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../utils/images/logo.png';

const Header = () => {
    return (
        <header className="bg-secondary flex-row">
            
            <div className="rapid-green-color container flex-row justify-space-between jusitfy-center float-left">
                <Link to="/">
                    <h1> Roberto Metals </h1>
                </Link>
                {/* <img src={logo} alt="BigCo Inc. logo" className="logo"/> */}

                <nav className="float-right">
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;