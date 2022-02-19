import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import Header from '../Header/header.jsx'

export default class UnitAdd extends Component {
    constructor(props) {
        super(props)
        this.onChangeStreetAddress = this.onChangeStreetAddress.bind(this);
        this.onChangeCity = this.onChangeCity.bind(this);
        this.onChangeZip = this.onChangeZip.bind(this);
        this.onChangeLinearFeet = this.onChangeLinearFeet.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeColorPattern = this.onChangeColorPattern.bind(this);


        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            streetAddress: '',
            city: '',
            zip: '',
            linearFeet: '',
            description: '',
            notes: '',
            colorPattern: ''
        }

    }
    onChangeStreetAddress(e) {
        this.setState({ streetAddress: e.target.value })
    }
    onChangeCity(e) {
        this.setState({ city: e.target.value })
    }
    onChangeZip(e) {
        this.setState({ zip: e.target.value })
    }
    onChangeLinearFeet(e) {
        this.setState({ notes: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value})
    }
    onChangeNotes(e) {
        this.setState({ notes: e.target.value})
    }
    onChangeColorPattern(e) {
        this.setState({ colorPattern: e.target.value})
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            streetAddress: this.state.streetAddress,
            city: this.state.city,
            zip: this.state.zip,
            linearFeet: this.state.linearFeet,
            description: this.state.description,
            notes: this.state.notes,
            colorPattern: this.state.colorPattern
        };

        axios.post(`http://localhost:3001/api/units/${clientId}`, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ streetAddress: '', city: '', zip: '', linearFeet: '', description: '', notes: '', colorPattern: []})
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Link to="/dashboard">
                    <button>Client List</button>
                </Link>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="form-group col-lg-4">
                            <label>Add first name</label>
                            <input type="text" value={this.state.streetAddress} onChange={this.onChangeStreetAddress} className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label>Add last name</label>
                            <input type="text" value={this.state.city} onChange={this.onChangeCity} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Phone Number</label>
                        <input type="text" value={this.state.zip} onChange={this.onChangeZip} className="form-control" />
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Notes</label>
                        <input type="text" value={this.state.linearFeet} onChange={this.onChangeLinearFeet} className="form-control" />
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Notes</label>
                        <input type="text" value={this.state.description} onChange={this.onChangeDescription} className="form-control" />
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Notes</label>
                        <input type="text" value={this.state.notes} onChange={this.onChangeNotes} className="form-control" />
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Notes</label>
                        <input type="text" value={this.state.colorPattern} onChange={this.onChangeColorPattern} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input  type="submit" value="Create User" className="btn btn-success btn-block"/>
                    </div>

                </form>
            </div>
        )
    }
}