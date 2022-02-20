import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.jsx';
import UnitList from '../UnitList/unitList.jsx';
import UpdateClient from '../UpdateClient/updateClient.jsx';
import UpdateUnit from '../UpdateUnit/updateUnit.jsx';

const Profile = () => {
    const { clientId } = useParams();
    console.log("clientid", clientId)

    // use state to put the client in an object. 
    const [client, setClient] = useState({});
    const [units, setUnits] = useState([]);
    const [editClient, setEditClient] = useState(true);
    const [editUnit, setEditUnit]  =  useState(true);

    // desctructure client with property names
    const {firstName, lastName, phoneNumber, notes, clientAcquired } = client;
    console.log('client ojbect', client)
    // useEffect to prevent rerender of useState
    useEffect(() => {
        const getClient = async () => {
            await axios.get(`http://localhost:3001/api/clients/${clientId}`)
                .then(response => response.data)
                .then(response => {
                    console.log('info', response)
                    setClient(response)
                    setUnits(response.units)
                })
                .catch(err => {
                    console.log('error', err)
                });
        } 
        getClient();
    }, [])
    
    const deleteClient = () => {
        console.log('client delete')
        axios.delete(`http://localhost:3001/api/clients/${clientId}`)
            .then(response => response.data)
            .catch(err => {
                console.log('deleting error', err)
            })
    }

    
    console.log('profile client', client)
    console.log('profile units', units)

    return (
        <div>
            <div>
                <Header />
                <Link to="/dashboard">
                    <button>Client List</button>
                </Link>
            </div>

            {editClient ?
                <div className="container">
                    <button onClick={() => setEditClient(false)}>Edit client</button>
                    <Link to="/dashboard"><button onClick={() => deleteClient()}>Delete Client</button></Link>
                    <div className="row">
                        <div className="card col" style={{ width: "400px" }}>
                            <h3 className="card-header">{firstName} {lastName}</h3>
                            <h3 className="card-body">{phoneNumber}</h3>
                        </div>
                        <div className="col">
                            <h6>Date Acquired:{clientAcquired}</h6>
                            <div>
                                <h5>Notes: </h5>
                                <h6>{notes}</h6>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="container">
                    <button onClick={() => setEditClient(true)}>back</button>
                    <UpdateClient
                        id={clientId}
                        firstName={firstName}
                        lastName={lastName}
                        phoneNumber={phoneNumber}
                        note={notes}
                    />
                </div>
            }

        {editUnit ?
            <div className="container">
            <button onClick={() => setEditUnit(false)}>Edit Unit</button>
                <table>
                    <tr>
                        <th>Street</th>
                        <th>City</th>
                        <th>Zip</th>
                        <th>Linear Feet</th>
                        <th>Description</th>
                        <th>Notes</th>
                        <th>Color Pattern</th>

                    </tr>

                    <tbody>
                        {units.map((unit, i) => {
                            return (
                                <tr key={i}>
                                    <td>
                                        {unit.street}
                                    </td>
                                    <td>
                                        {unit.city}
                                    </td>
                                    <td>
                                        {unit.zip}
                                    </td>
                                    <td>
                                        {unit.footage}
                                    </td>
                                    <td>
                                        {unit.unitDescription}
                                    </td>
                                    <td>
                                        {unit.notes}
                                    </td>
                                    <td>
                                        {unit.colorPattern}
                                    </td>
                                    <td>
                                        <button onClick={() => setEditUnit(false)}>edit</button>
                                    </td>
                                    <td>
                                        <button onClick={() => setEditUnit(false)}>delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>  
            : 
            <div className='container'>
                <button onClick={() => setEditUnit(true)}>back</button>
                <UpdateUnit  id={clientId} units={units}/>
            </div> 
            
        }
        </div>  

    )

};
export default Profile
