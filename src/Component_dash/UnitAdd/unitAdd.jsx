import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UnitAdd = () => {
    const params = useParams();
    const clientId = params.clientId
    console.log('zz',clientId)
    const [formData, setFormData] = useState({
        street: '',
        city: '',
        zip: '',
        footage: '',
        unitDescription: '',
        notes: '',
        colorPattern: []

    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('111',  formData);
        const data = formData
        axios.post(`http://localhost:3001/api/units/${clientId}`, data)
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
                    <label>Street</label>
                    <input type="text" value={formData.street} onChange={(e) => setFormData({ ...formData, street: e.target.value })} name="street" id="street" className="form-control" />
                </div>
                <div className="form-group col-lg-4">
                    <label>City</label>
                    <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} name="city" id="city" className="form-control" />
                </div>
            </div>
            <div className="form-group col-lg-8">
                <label>Zip</label>
                <input type="text" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} name="zip" id="zip" className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Linear Feet</label>
                <input type="text" value={formData.footage} onChange={(e) => setFormData({ ...formData, footage: e.target.value })} name="footage" id="footage" className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Description</label>
                <input type="text" value={formData.unitDescription} onChange={(e) => setFormData({ ...formData, unitDescription: e.target.value })} name="unitDescription" id="unitDescription" className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Notes</label>
                <input type="text" value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} name="notes" id="notes" className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Color Pattern</label>
                <input type="text" value={formData.colorPattern} onChange={(e) => setFormData({ ...formData, colorPattern: e.target.value })} name="colorPattern" id="colorPattern" className="form-control" />
            </div>
            <div className="form-group">
                <input type="submit" value="Create User" className="btn btn-success btn-block" />
            </div>

        </form>
    )
}

export default UnitAdd;