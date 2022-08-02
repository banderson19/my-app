import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';
import './profile.css';
import axios from 'axios';
import Header from '../Header/header.jsx';
import UpdateClient from '../UpdateClient/updateClient.jsx';
import UpdateUnit from '../UpdateUnit/updateUnit.jsx';
import UnitAdd from '../UnitAdd/unitAdd.jsx';
import ServiceAdd from '../ServiceAdd/serviceAdd.jsx';
import AddService from '../AddService/addService.jsx';

import house from '../../assets/images/image1.jpeg';
import mapIcon from '../../assets/images/mapicon.png';
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
    const [addService, setAddService] = useState(true);

    const [show, setShow] = useState(false);

    // desctructure client with property names
    const { firstName, lastName, phoneNumber, email, street, city, zip, notes, clientAcquired } = client;
    console.log('client ojbect', client)
    // useEffect to prevent rerender of useState
    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`http://localhost:3001/api/clients/${clientId}`)
                .then(response => response.data)
                .then(response => {
                    console.log('info', response)
                    setClient(response)
                    setUnits(response.units)
                    setServices(response.units.services)
                })
                .catch(err => {
                    console.log('error', err)
                });
        }
        fetchData();
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    console.log('profile client', client)
    console.log('profile units', units)
    console.log('services', services)

    return (
        <div>
            <div>
                <Header />
            </div>
            {/* edit client info */}
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5">
                    <div className="row">
                        <div className="col">
                            <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">Client List</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Client Profile</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                        className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                    <h5 className="my-3">{firstName} {lastName}</h5>
                                    <p className="text-muted mb-4">{city}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-outline-dark" size="sm" style={{ zIndex: "1" }} onClick={() => setEditClient(false)}>Edit Info</button>
                                    <button type="button" className="btn btn-outline-danger" size="sm" style={{ zIndex: "1" }} onClick={() => deleteClient()}>Delete Profile</button>
                                    <button className="btn btn-outline-success" size="sm" style={{ zIndex: "1" }}><AddService data={units}/></button>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-4">
                                <div className="card-body p-0">
                                    <img src={house}
                                        alt="clients house" className="img-fluid img-thumbnail rounded mx-auto d-block"
                                        style={{ width: "200px", height: "200px", zIndex: "1" }} />
                                </div>
                            </div>
                            <div className="card mb-4 mb-lg-0">
                                <div className="card-body p-0">
                                    <img src={mapIcon}
                                        alt="clients house" className="img-fluid rounded mx-auto d-block img-thumbnail "
                                        style={{ width: '200px', height: '200px', zIndex: "1" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Date Aqcuired</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{formattedTimeStamp}</p>
                                        </div>
                                    </div>
                                    <div>
                                        <hr />
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{formatPhoneNumber(phoneNumber)}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Billing Address</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{street}, {city} UT, {zip}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row mb-4">
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4 text-primary me-1">Client Rev
                                            </p>
                                            <div className="row text-center mb-4">
                                                <div className="col-md-6">
                                                <p className="mb-1 h5">3</p>
                                                <p className="small text-muted mb-0"># of yrs serviced</p>
                                                </div>
                                                <div className="col-md-6">
                                                <p className="mb-1 h5">3</p>
                                                <p className="small text-muted mb-0"># of yrs serviced</p>
                                                </div>
                                            </div>
                                            <div className="row mb-4">
                                                <div className="col-md text-center">
                                                <p className="mb-1 h5">$500</p>
                                                <p className="small text-muted mb-0">Total rev</p>
                                                </div>
                                                <div className="col-md text-center">
                                                <p className="mb-1 h5">4</p>
                                                <p className="small text-muted mb-0">number of units</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md text-center">
                                                <p className="mb-1 h5">$500</p>
                                                <p className="small text-muted mb-0">First Initial Install</p>
                                                </div>
                                                <div className="col-md text-center">
                                                <p className="mb-1 h5">$150</p>
                                                <p className="small text-muted mb-0">quoted amount</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body">
                                            <p className="mb-4 text-primary">Client Status
                                            </p>
                                            <p className="mb-1" style={{ fontSize: ".77rem;" }}>Warm, active</p>
                                            <div className="progress rounded" style={{ height: "5px" }}>
                                                <div className="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Referrals</p>
                                            <ol>
                                                <li>client</li>
                                                <li>client 2</li>
                                            </ol>
                                            <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>Type of service</p>
                                            <div className="row flex-wrap">
                                                <button className="my-1 mx-1 btn btn-small btn-secondary" style={{width: '150px'}}>Christmas Lights</button>
                                                <button className="my-1 mx-1 btn btn-small btn-secondary" style={{width: '150px'}}>Christmas Lights</button>
                                                <button className="my-1 mx-1 btn btn-small btn-secondary" style={{width: '150px'}}>Christmas Lights</button>
                                                <button className="my-1 mx-1 btn btn-small btn-secondary" style={{width: '150px'}}>Christmas Lights</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md">
                                    <div className="card mb-4 mb-md-0">
                                        <div className="card-body" style={{height: '187px'}}>
                                            <h6 className="mb-4"><span className="text-primary font-italic me-1">Notes</span>
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* new unit component */}
            {units.map((unit, i) => {
                console.log('map unit', unit)
                return (

                    <div className="h-100 gradient-custom-2">
                        <div className="container py-2 h-100">
                            <div className="row d-flex justify-content-center align-items-center h-100">
                                <div className="col">
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
                                        {unit.services.map((service, i) => {
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
                            {/* add a service here turn into bet ui add modal*/}
                            {addService ?
                                <div>
                                </div>
                                :
                                <div className="container mb-4">
                                    <button className="my-2 btn btn-secondary" onClick={() => setAddService(true)}>Back</button>
                                    <ServiceAdd id={clientId} />
                                </div>

                            }
                        </div>
                    </div>
                )
            })}
        </div>
    )
};
export default Profile
