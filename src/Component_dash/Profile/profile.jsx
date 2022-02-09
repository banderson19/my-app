import React from 'react';
import { Link} from 'react-router-dom';
import Header from '../Header/header.jsx';


const profile = () => {
    return (
        <div>
            <Header/>
        
        <div className="container">
            <Link to="/dashboard">
                <button>Client List</button>
            </Link>
            <div>
                <h3>Jake kelly</h3>
                <h3>Contact Info</h3>
            </div>

            <div className="container">
                <div className="row">
                    <h3 className="col">Street</h3>
                </div>
                <div className="row">
                    <h3 className="col">city</h3>
                </div>
                <div className="row">
                    <h3 className="col">zip</h3>
                </div>
                <div className="row">
                    <h3 className="col">notes</h3>
                </div>
                <div className="row">
                    <h3 className="col">footage</h3>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h3 className="col">Unit description</h3>
                </div>
                <div className="row">
                    <h3 className="col">Notes</h3>
                </div>
                <div className="row">
                    <h3 className="col">Color Pattern</h3>
                </div>
            </div>

        </div>
        </div>
    ) 
};

export default profile;
