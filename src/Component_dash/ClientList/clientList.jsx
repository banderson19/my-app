import React from 'react';
import { Link} from 'react-router-dom';

const clientList = () => {
  return (
    <div className="container">
        <div className="row">
            <h2>Clients</h2>
        </div>
        <div className="row">
            <div className="col-3">
                <h3>Name</h3>
                <Link to="/clientList/profile">Jake Kelly</Link>
            </div>
            <div className="col-3">
                <h3>Phone</h3>
                <h6>(801) 555- 5555</h6>
            </div>
            <div className="col-3">
                <h3>Notes</h3>
                <h6>new home being built next year</h6>
            </div>
            <div className="col-3">
                <h3>Client Acquired</h3>
                <h6>10/10/2018</h6>
            </div>
        </div>
    </div>
  )
};

export default clientList;
