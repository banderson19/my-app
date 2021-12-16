import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../utils/images/logo.png';

const Header = () => {
    return (
        <header className="App-header">
            
            <div className="">
                
                    <h1> Swift Holiday Lighting </h1>
               
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