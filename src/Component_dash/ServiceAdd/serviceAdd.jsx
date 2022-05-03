import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ServiceAdd = () => {
    const params = useParams();
    const clientId = params.clientId
    console.log('servizzze client id',clientId)
    const [formData, setFormData] = useState({
        serviceDate: '',
        service: '',
        notes: '',
        charge: '',
        cost: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('addservice form',  formData);
        const data = formData
        axios.post(`http://localhost:3001/api/services/${clientId}`, data)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
    }
    // "Cast to ObjectId failed for value "[object Object]" (type string) at path "_id" for model "Client""
    return (
        <form onSubmit={handleSubmit} >
            <div className="row">
                <div className="form-group col-lg-4">
                    <label>Service Date</label>
                    <input type="text" value={formData.serviceDate} onChange={(e) => setFormData({ ...formData, serviceDate: e.target.value })} name="serviceDate" id="serviceDate" className="form-control" />
                </div>
                <div className="form-group col-lg-4">
                    <label>Service</label>
                    <input type="text" value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} name="service" id="service" className="form-control" />
                </div>
            </div>
            <div className="form-group col-lg-8">
                <label>Notes</label>
                <input type="text" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} name="notes" id="notes" className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Charge</label>
                <input type="text" value={formData.charge} onChange={(e) => setFormData({ ...formData, charge: e.target.value })} name="charge" id="charge" className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Cost</label>
                <input type="text" value={formData.cost} onChange={(e) => setFormData({ ...formData, cost: e.target.value })} name="cost" id="cost" className="form-control" />
            </div>
        </form>
    )
}

export default ServiceAdd;