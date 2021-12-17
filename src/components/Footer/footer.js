import React from 'react';
import { getOverlayDirection } from 'react-bootstrap/esm/helpers';

const Footer = () => {
    return (
        <footer className="w-100 mt-auto  p-4" style={{backgroundColor: "#37383a"}}>
            <div className="container" style={{color: "whitesmoke"}}> &copy; 2021 by Bradford Anderson </div>
        </footer>
    );
};

export default Footer;