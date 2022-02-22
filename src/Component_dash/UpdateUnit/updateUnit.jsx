import React, { Component } from 'react';
import { Link, useLocation } from 'react-router-dom';

import axios from 'axios';
import Header from '../Header/header.jsx'

class UpdateUnit extends Component {
    constructor(props) {
        super(props)
        this.onChangeStreet = this.onChangeStreet.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeFootage = this.onChangeFootage.bind(this);
        this.onChangeUnitDescription = this.onChangeUnitDescription.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeColorPattern = this.onChangeColorPattern.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            clientId: this.props.id,
            unitId: this.props.units[this.props.index]._id,
            street: this.props.units[this.props.index].street,
            city: this.props.units[this.props.index].city,
            zip: this.props.units[this.props.index].zip,
            footage: this.props.units[this.props.index].footage,
            unitDescription: this.props.units[this.props.index].unitDescription,
            notes: this.props.units[this.props.index].notes,
            colorPattern: this.props.units[this.props.index].colorPattern
        }
        console.log('001',this.props)
        console.log('00',this.state.unitId)
    }

    onChangeStreet(e) {
        this.setState({ street: e.target.value })
    }
    onChangeCity(e) {
        this.setState({ city: e.target.value })
    }
    onChangeZip(e) {
        this.setState({ zip: e.target.value })
    }
    onChangeFootage(e) {
        this.setState({ footage: e.target.value })
    }
    onChangeUnitDescription(e) {
        this.setState({ unitDescription: e.target.value })
    }
    onChangeNotes(e) {
        this.setState({ notes: e.target.value })
    }
    onChangeColorPattern(e) {
        this.setState({ colorPattern: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            street: this.state.street,
            city: this.state.city,
            zip: this.state.zip,
            footage: this.state.footage,
            unitDescription: this.state.unitDescription,
            notes: this.state.notes,
            colorPattern: this.state.colorPattern
        };
        console.log('111', userObject)
        axios.put(`http://localhost:3001/api/units/${this.state.clientId}/${this.state.unitId}`, userObject)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group col-lg-6">
                            <label>Street Address</label>
                            <input type="text" value={this.state.street} onChange={this.onChangeStreet} className="form-control" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label>City</label>
                            <input type="text" value={this.state.city} onChange={this.onChangeCity} className="form-control" />
                        </div>
                        <div className="form-group col-lg-3">
                            <label>Zip</label>
                            <input type="text" value={this.state.zip} onChange={this.onChangeZip} className="form-control" />
                        </div>
                        <div className="form-group col-lg">
                            <label>Linear Feet</label>
                            <input type="text" value={this.state.footage} onChange={this.onChangeFootage} className="form-control" />
                        </div>
                        <div className="form-group col-lg">
                            <label>Color Pattern</label>
                            <input type="text" value={this.state.colorPattern} onChange={this.onChangeColorPattern} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea type="text" value={this.state.unitDescription} onChange={this.onChangeUnitDescription} className="form-control" />
                        </div>
                        <div>
                            <label>Notes</label>
                            <input type="text" value={this.state.notes} onChange={this.onChangeNotes} className="form-control" />
                        </div>

                    </div>
                    <div className="form-group">
                        <button to="/dashboard" type="submit" className="btn btn-success btn-block">save client</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UpdateUnit;
