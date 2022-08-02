import React, { useState, useEffect } from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';

import Modal from 'react-bootstrap/Modal'


const AddService = (props) => {
    let {data} = props
    const [show, setShow] = useState(false);
    // const [data, setData] = useState({});

    // setData(...props)

    // useEffect(() => {
    //     setData(client)
    //     console.log('useeffect run')
    // }, [])


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // let { firstName, lastName, phoneNumber, email, street, city, zip, notes, clientAcquired } = data;
    

    console.log('444', data)
    console.log('555', data[0])
    // console.log(newUnits)
    return (
        <div>
            <section id='serviceForm'>
                <div className="">
                    <button className="btn" onClick={handleShow}>
                        Add Service
                    </button>
                </div>
            </section>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Body className="form">
                    <form className="row g-3">
                        {/* <h2>{firstName} {lastName}</h2> */}
                        <div className="col-12">
                            <label for="inputUnit" className="form-label">Unit</label>
                            <select id="inputUnit" className="form-select">
                                <option selected>Select Unit</option>
                                {data.map((unit, i) =>                                   
                                        <option key={unit._id}>{unit.street} {unit.city} Ut {unit.zip}</option>
                                )}
                            </select> 
                        </div>
                        <div className="col-md-6">
                            <label for="inputDate" className="form-label">Date</label>
                            <input type="date" className="form-control" id="inputDate" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputServiceType" className="form-label">Service Type</label>
                            <select id="inputServiceType" className="form-select">
                                <option selected>Choose...</option>
                                <option>Christmas Lights</option>
                                <option>Tree Arboring</option>
                                <option>Gutter Clean Out</option>
                                <option>Other Labor</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputCharge" className="form-label">Charge</label>
                            <input type="text" className="form-control" id="inputCharge" />
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    <button variant="secondary" type="button" onClick={handleClose}>
                        Close
                    </button>
                    </form>
                
            </Modal.Body>

        </Modal>
   </div>
  
  )
}

export default AddService
