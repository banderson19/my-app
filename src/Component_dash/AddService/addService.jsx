import React, { useState } from 'react'
import * as AiIcons from 'react-icons/ai';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal'


const AddService = (props) => {
    let {data} = props
    const [show, setShow] = useState(false);
    const [addUnit, setAddUnit] = useState(true);
    const [unitId, setUnitId] = useState();
    const [formData, setFormData] = useState({
        serviceDate: '',
        service: '',
        notes: '',
        charge: ''
    })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('addservice form',  formData);
        const data = formData
        axios.post(`http://localhost:3001/api/services/${unitId}`, data)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
    }

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
                    <form className="row g-3" onSubmit={handleSubmit}>
                        <div className="col-12 row mt-3">
                            <div variant="secondary" type="button" className="col text-end" style={{float: 'right'}}onClick={handleClose}>
                            <AiIcons.AiOutlineCloseCircle/>
                            </div>
                        </div>
                        <div className="col-12">
                            <label for="inputUnit" className="form-label">Unit<span>({data.length})</span></label>
                            <select id="inputUnit" className="form-select">
                                <option selected>Select Unit</option>
                                {data.map((unit, i) =>                                   
                                        <option key={unit._id} value={unit._id} onChange={(e) => setFormData({unitId: e.target.value })}>{unit.street} {unit.city} Ut {unit.zip}</option>
                                )}
                            </select> 
                        </div>
                        <div className="col-md-6">
                            <label for="inputDate" className="form-label">Date</label>
                            <input type="date" value={formData.serviceDate} onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })} className="form-control" id="inputDate" />
                        </div>
                        <div className="col-md-4">
                            <label for="inputServiceType" className="form-label">Service Type</label>
                            <select id="inputServiceType" className="form-select">
                                <option selected>Choose...</option>
                                <option value={formData.serice} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>Christmas Lights</option>
                                <option value={formData.serice} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>Tree Arboring</option>
                                <option value={formData.serice} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>Gutter Clean Out</option>
                                <option value={formData.serice} onChange={(e) => setFormData({ ...formData, service: e.target.value })}>Other Labor</option>
                            </select>
                        </div>
                        <div className="col-md-2">
                            <label for="inputCharge" className="form-label">Charge</label>
                            <input type="text" value={formData.charge} onChange={(e) => setFormData({ ...formData, charge: e.target.value })} className="form-control" id="inputCharge" />
                        </div>
                        <div  className="col-12">
                            <label for="inputNote" className="form-label">Notes</label> 
                            <textarea type="text" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })}className="form-control" name="Text1" cols="40" rows="5"></textarea>
                        </div>
                        <div className="col-12">
                            <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                
            </Modal.Body>

        </Modal>
   </div>
  
  )
}

export default AddService
