import React from 'react';
import './header.css';

const Header = () => {
  return (
      <div className="container">
        <div className="mt-5">
            <div className="col text-center contact">
                <h1 style={{color: '#FF4B5C'}}><strong>Contact Us</strong></h1>
                <h3 className="mt-3" style={{color: '#F0A500'}}>(801) 694 - 2493</h3>
                <h5 style={{color: '#F0A500'}}><em>or</em></h5>
                <h3 style={{color: '#F0A500'}}>service@swiftholidaylighting.com</h3>
            </div>
        </div>
        <div className="header text-center mt-5 mb-5">
            <h1 style={{color: '#FF4B5C'}}><strong>About Us</strong></h1>
            <h3 className="mt-3" style={{color: '#F0A500'}}>
                Invite cheer this year and every year by adding christmas lights on your home. 
                Providing professional service to homes along the whole wasatch front, Swift Holiday Lighting LLC
                is committed to keeping your lights on and clean cut for all your family, friends and neighbors
                to enjoy! That warm feeling is what we all crave during the cold winter months and you can rely on us 
                to bring that your house. 
            </h3>
        </div>
    </div>
  ) 
};

export default Header;
