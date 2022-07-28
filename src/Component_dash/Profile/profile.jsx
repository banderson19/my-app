import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import './profile.css';
import axios from 'axios';
import Header from '../Header/header.jsx';
import UpdateClient from '../UpdateClient/updateClient.jsx';
import UpdateUnit from '../UpdateUnit/updateUnit.jsx';
import UnitAdd from '../UnitAdd/unitAdd.jsx';
import ServiceAdd from '../ServiceAdd/serviceAdd.jsx';

import house from '../../assets/images/image1.jpeg';
import { formatPhoneNumber } from '../../data/utils.js';

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
    const { firstName, lastName, phoneNumber, email, street, city, zip, notes, clientAcquired } = client;
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

    // date format
    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dateObj = new Date(clientAcquired)
    const formattedMonth = months[dateObj.getMonth()];

    const day = dateObj.getDate() + 1
    const year = dateObj.getFullYear()
    const formattedTimeStamp = `${formattedMonth} ${day}, ${year}`;

    // if client has no secondary units Hide component


    // phoneNumber format
    // const formatPhoneNumber = (phoneNumberString) => {
    //     var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    //     var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    //     if (match) {
    //       return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    //     }
    //     return null;
    //   }

    console.log('profile client', client)
    console.log('profile units', units)

    return (
        <div>
            <div>
                <Header />
            </div>
            {/* edit client info */}
            {editClient ?
                <div className="h-100 gradient-custom-2">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col col-lg-9 col-xl-7">
                                <div className="card">
                                    {/* make card background match clients colors pattern */}
                                    <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000", height: "200px" }}>
                                        <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                                            <img src={house}
                                                alt="clients house" className="img-fluid img-thumbnail mt-4 mb-3"
                                                style={{ width: "150px", zIndex: "1" }} />
                                            <button type="button" className="btn btn-outline-dark mt-1" size="sm" style={{ zIndex: "1" }} onClick={() => setEditClient(false)}>Edit Info</button>
                                            <button type="button" className="btn btn-outline-danger mt-2" size="sm" style={{ zIndex: "1" }} onClick={() => deleteClient()}>Delete Profile</button>
                                        </div>
                                        <div className="ms-3 mb-1" style={{ marginTop: "80px" }}>
                                            <h5>{firstName} {lastName}</h5>
                                            <p className="mb-1">{formatPhoneNumber(phoneNumber)} </p>
                                            <p className="mb-1">{formattedTimeStamp}</p>
                                            <p className="mb-1">email: {email} </p>
                                        </div>
                                    </div>
                                    <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                        <div className="d-flex justify-content-end text-center py-1">
                                            <div>
                                                <p className="mb-1 h5">3</p>
                                                <p className="small text-muted mb-0"># of yrs serviced</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="mb-1 h5">$150</p>
                                                <p className="small text-muted mb-0">quoted install</p>
                                            </div>
                                            <div>
                                                <p className="mb-1 h5">$500</p>
                                                <p className="small text-muted mb-0">Total rev</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="float-right">
                                    <button className="my-2 btn btn-outline-success" onClick={() => setAddUnit(false)}>+ Unit</button>
                                    <button className=" my-2 btn btn-outline-success" onClick={() => setAddService(false)}>+ Service</button>
                                </div>

                                <div className="card-body p-4 text-black">
                                    <div className="mb-5">
                                        <p className="lead fw-normal mb-1">Main Info</p>
                                        <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                            <p className="font-italic mb-1">Date Acquired: <span className="text-muted">{formattedTimeStamp}</span></p>
                                            <p className="font-italic mb-1">Email: <span className="text-muted">{email}</span> </p>
                                            <p className="font-italic mb-1">Address: <span className="text-muted">{street}, {city} UT, {zip}</span></p>
                                            <p className="font-italic mb-0">Notes: <span className="text-muted">{notes}</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <div className="container">
                    <button className="my-2 btn btn-secondary" onClick={() => setEditClient(true)}>back</button>
                    <UpdateClient
                        id={clientId}
                        firstName={firstName}
                        lastName={lastName}
                        phoneNumber={phoneNumber}
                        note={notes}
                    />
                </div>
            }

            {/* new unit component */}
            {units.map((unit, i) => {
                return (

                    <div className="h-100 gradient-custom-2">
                        <div className="container py-2 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col col-lg-9 col-xl-7">
                                    <div className="card">
                                        <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: "#000", height: "200px" }}>
                                            <div className="ms-4 mt-5 d-flex flex-column" style={{ width: "150px" }}>
                                                <img src={house}
                                                    alt="clients house" className="img-fluid img-thumbnail mt-4 mb-3"
                                                    style={{ width: "150px", zIndex: "1" }} />
                                                <button className=" my-2 btn btn-outline-success" onClick={() => setAddService(false)}>+ Service</button>
                                                <button className="btn btn-outline-info" onClick={() => { setEditUnit(false); setIndex(i) }}><GrIcons.GrEdit /></button>                                            </div>
                                            <div className="ms-3 mb-1" style={{ marginTop: "80px" }}>
                                                <h5>{unit.street} {unit.city}, UT {unit.zip}</h5>
                                                <p className="mb-1">{unit.footage}</p>
                                                <p className="mb-1">{unit.unitDescription}</p>
                                                <p className="mb-1">{unit.colorPattern} </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 text-black" style={{ backgroundColor: "#f8f9fa" }}>
                                        <div className="d-flex justify-content-end text-center py-1">
                                            <div>
                                                <p className="mb-1 h5">3</p>
                                                <p className="small text-muted mb-0"># of yrs serviced</p>
                                            </div>
                                            <div className="px-3">
                                                <p className="mb-1 h5">$150</p>
                                                <p className="small text-muted mb-0">quoted install</p>
                                            </div>
                                            <div>
                                                <p className="mb-1 h5">$500</p>
                                                <p className="small text-muted mb-0">Total rev</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-center align-items-center h-100">
                            <table className="col col-lg-7 mx-2">
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
                        </div>
                    </div>
                )
            })}
            {addUnit ?

                <div className="container">
                    <button className="my-2 btn btn-outline-success" onClick={() => setAddUnit(false)}>+ Unit</button>
                </div>
                :
                <div className="container">
                    <button className="mt-2 btn btn-secondary" onClick={() => setAddUnit(true)}>Back</button>
                    <UnitAdd id={clientId} />
                </div>

            }
            {/* toggle between displaying the unit info  or editing the info */}
            {editUnit ?
                <div className="container">
                    <table>
                        <tr>
                            <th>Address</th>
                            <th>Linear Feet</th>
                            <th>Description</th>
                            <th>Notes</th>
                            <th>Color Pattern</th>
                            <th></th>
                            <th></th>

                        </tr>

                        <tbody>
                            {units.map((unit, i) => {
                                console.log('unit', unit)
                                return (
                                    <tr key={i}>
                                        <td>
                                            {unit.street} {unit.city}, UT {unit.zip}
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
                                            <button className="btn btn-outline-info" onClick={() => { setEditUnit(false); setIndex(i) }}><GrIcons.GrEdit /></button>
                                        </td>
                                        <td>
                                            <button className="btn btn-outline-danger" onClick={() => deleteUnit(unit._id)}><FaIcons.FaTrash /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    {/* add a service here  */}
                    {addService ?
                        <div>
                            <button className=" my-2 btn btn-outline-success" onClick={() => setAddService(false)}>+ Service</button>
                        </div>
                        :
                        <div className="container mb-4">
                            <button className="my-2 btn btn-secondary" onClick={() => setAddService(true)}>Back</button>
                            <ServiceAdd id={clientId} />
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
                    <button className="btn btn-secondary" onClick={() => setEditUnit(true)}>back</button>
                    <UpdateUnit id={clientId} index={index} units={units} />
                </div>

            }
        </div>
    )

};
export default Profile
