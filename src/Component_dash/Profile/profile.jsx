import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.jsx';
import UpdateClient from '../UpdateClient/updateClient.jsx';
import UpdateUnit from '../UpdateUnit/updateUnit.jsx';
import UnitAdd from '../UnitAdd/unitAdd.jsx';
import ServiceAdd from '../ServiceAdd/serviceAdd.jsx';

const Profile = () => {
    const { clientId } = useParams();
    console.log("clientid", clientId)
    const [index, setIndex] = useState('')
    // use state to put the client in an object. 
    const [client, setClient] = useState({});
    const [units, setUnits] = useState([]);
    const [services, setServices] = useState([]);
    const [editClient, setEditClient] = useState(true);
    const [editUnit, setEditUnit] = useState(true);
    const [addUnit, setAddUnit] = useState(true);
    const [addService, setAddService] = useState(true);

    // desctructure client with property names
    const { firstName, lastName, phoneNumber, notes, clientAcquired } = client;
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
                    setServices(response.services)
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
    const deleteUnit = (unitId) => {
        axios.delete(`http://localhost:3001/api/units/${clientId}/${unitId}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.log(err)
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
            {/* edit client info */}
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
            {/* add unit to the client profile */}
            {addUnit ?
                <div className="container">
                    <button onClick={() => setAddUnit(false)}>Add Unit</button>
                </div>
                :
                <div className="container">
                    <button onClick={() => setAddUnit(true)}>Back</button>
                    <UnitAdd id={clientId} />
                    <div>hello mark</div>
                </div>

            }
            {/* toggle between displaying the unit info  or editing the info */}
            {editUnit ?
                <div className="container">
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
                                console.log('unit', unit)
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
                                            <button onClick={() => { setEditUnit(false); setIndex(i) }}>edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteUnit(unit._id)}>delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* add a service here  */}
                    {addService ?
                        <div className="container">
                            <button onClick={() => setAddService(false)}>Add Service</button>
                        </div>
                        :
                        <div className="container">
                            <button onClick={() => setAddService(true)}>Back</button>
                            <ServiceAdd id={clientId} />
                            <div>hello mark</div>
                        </div>

                    }
                    <table>
                        <tr>
                            <th>Service Date</th>
                            <th>Service</th>
                            <th>Notes</th>
                            <th>Charge</th>
                            <th>Cost</th>
                        </tr>
                        <tbody>
                            {services.map((service, i) => {
                                console.log('service', service)
                                return (
                                    <tr key={i}>
                                        <td>
                                            {service.serviceDate}
                                        </td>
                                        <td>
                                            {service.service}
                                        </td>
                                        <td>
                                            {service.notes}
                                        </td>
                                        <td>
                                            {service.charge}
                                        </td>
                                        <td>
                                            {service.cost}
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
                    <UpdateUnit id={clientId} index={index} units={units} />
                </div>

            }
        </div>

    )

};
export default Profile
