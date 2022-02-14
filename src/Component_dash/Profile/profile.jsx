import React, { useState } from 'react';

import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.jsx';
import UnitList from '../UnitList/unitList.jsx';

const Profile = () => {
    const { clientId } = useParams();
    console.log("clientid", clientId)

    // desructure this
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [note, setNote] = useState('')
    const [date, setDate] = useState('')

    const [edit, setEdit] = useState(true);

    const getUser = () => {
        console.log('hello')
        axios.get(`http://localhost:3001/api/clients/${clientId}`)
            .then(response => response.data)
            .then(response => {
                console.log('info', response)
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

    const updateUser = () => {
        const  userObject = {
            firstName: firstName,
            lastName: lastName
        }
        axios.put(`http://localhost:3001/api/clients/${clientId}`, userObject)
            .then((res) => {
                console.log('res.data')
            }).catch((error)=> {
                console.log(error)
            })
    }
    return (
        <div>
            <div>
                <Header />
                <Link to="/dashboard">
                    <button>Client List</button>
                </Link>
            </div>
            


            {edit ?
                <div className="container">
                    <button onClick={() => setEdit(false)}>Edit client</button>
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
                : 
                <div>

                <form onSubmit={updateUser}>
                <div className="container">
                    <div className="row">
                        <div className="card col" style={{ width: "400px" }}>
                            <div className="row">
                                <textarea type="text" className="form-control" onSubmit={setFirstName}>{firstName}</textarea>
                                <textarea type="text" className="form-control" onSubmit={setLastName}>{lastName}</textarea>
                                <textarea type="text" className="form-control">{date}</textarea>
                                <textarea type="text" className="form-control">{note}</textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={() => setEdit(true)}>cancel</button>
            <button type="submit">save client</button>
            </form>
            </div>
            }
            <UnitList id={clientId} />
        </div>
    )

};
export default Profile
