import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.jsx';

const Profile = () => {
    const { clientId } = useParams();
    console.log("clientid", clientId)

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')
    const [unit, setUnit] = useState([])

    const getUser = () => {
        console.log('hello')
        axios.get(`http://localhost:3001/api/clients/${clientId}`)
            .then(response => response.data)
            .then(response => {
                console.log('info', response)
                // console.log('unit', response.units)
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setPhoneNumber(response.phoneNumber)
                setNote(response.note);
                setDate(response.clientAcquired);
                // setUnit(response.units)
            })
            .catch(err => {
                console.log('error', err)
            });
            // console.log('name', this.state.firstName)
    };
    getUser();
    console.log('clientInfo', firstName, lastName, phoneNumber, note, date)
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
