import React, { useState } from 'react';

import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.jsx';
import UnitList from '../UnitList/unitList.jsx';

const Profile = () => {
    const { clientId } = useParams();
    console.log("clientid", clientId)

    // desructure this
    // const [clientId, setClientId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')

    const getUser = () => {
        console.log('hello')
        axios.get(`http://localhost:3001/api/clients/${clientId}`)
            .then(response => response.data)
            .then(response => {
                console.log('info', response)
                // setClientId(response._id)
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setPhoneNumber(response.phoneNumber)
                setNote(response.note);
                setDate(response.clientAcquired);
            })
            .catch(err => {
                console.log('error', err)
            });
    };
    getUser();

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
                        <h3 className="card-header">{firstName} {lastName}</h3>
                        <h3 className="card-body">{phoneNumber}</h3>
                    </div>
                    <div className="col">
                        <h6>Date Acquired: {date}</h6>
                        <div>
                            <h5>Notes: </h5>
                            <h6>{note}</h6>
                        </div>
                    </div>
                </div>
            </div>
            <UnitList id={clientId}/>
        </div>
    )

};
export default Profile
