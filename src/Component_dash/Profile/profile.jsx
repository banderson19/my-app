import React from 'react';
import { Link, useParams, useLocation} from 'react-router-dom';
import Header from '../Header/header.jsx';


const Profile = (props) => {
    // console.log('333', this.props.state)
    // const {id } = useParams();
    // const location = useLocation();
    // const {fromClientList} = location.state;
    // console.log('222',id)
    // console.log(location)
    // console.log(this.state.client)
    return (
        <div>
            <div>
                <Header />
                <Link to="/dashboard">
                    <button>Client List</button>
                </Link>
            </div>
            <div className="container">
                <div className="row">
                    <div className="card col" style={{ width: "400px" }}>
                        <h3 className="card-header">Jake Kelly</h3>
                        <h3 className="card-body">Phone Number</h3>
                    </div>
                    <div className="col">
                        <h6>Date Acquired: 10/10/18</h6>
                        <div>
                            <h5>Notes: </h5>
                            <h6>Quoted at $3/foot</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className='row'>

                <div className="col">
                    <div className="row">
                        <h3 className="">Street</h3>
                    </div>
                    <div className="row">
                        <h3 className="">city</h3>
                    </div>
                    <div className="row">
                        <h3 className="">zip</h3>
                    </div>
                    <div className="row">
                        <h3 className="">notes</h3>
                    </div>
                    <div className="row">
                        <h3 className="">footage</h3>
                    </div>
                </div>

                <div className="col">

                    <div className="row">
                        <h3 className="row">Unit description:</h3>
                        <h6>Home is getting built next year</h6>
                    </div>
                    <div className="row">
                        <h3 className="row">Notes</h3>
                    </div>
                    <div className="row">
                        <h3 className="row">Color Pattern</h3>
                        <h6>warm white, red</h6>

                    </div>
                </div>
                </div>
            </div>
        </div>
    )
};

export default Profile;
