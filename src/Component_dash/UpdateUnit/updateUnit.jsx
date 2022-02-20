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
        this.onChangeLinearFeet = this.onChangeLinearFeet.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);
        this.onChangeColorPattern = this.onChangeColorPattern.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            clientId: this.props.id,
            unitId: this.props.units[0]._id,
            street: this.props.units[0].street,
            city: this.props.units[0].city,
            zip: this.props.units[0].zip,
            linearFeet: this.props.units[0].footage,
            description: this.props.units[0].description,
            notes: this.props.units[0].street,
            colorPattern: this.props.units[0].colorPattern
        }
        console.log(this.props)
        console.log(this.state.unitId)
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
    onChangeLinearFeet(e) {
        this.setState({ linearFeet: e.target.value })
    }
    onChangeDescription(e) {
        this.setState({ description: e.target.value })
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
            linearFeet: this.state.linearFeet,
            description: this.state.description,
            notes: this.state.notes,
            colorPattern: this.state.colorPattern
        };
        console.log('111', userObject)
        axios.put(`http://localhost:3001/api/units/6202d07113d7a38be2e131fa/6202d09f13d7a38be2e131fc`, userObject)
            .then((res) => {
                console.log(res)
            }).catch((error) => {
                console.log(error)
            });
    }

    // onSubmit(e) {
    //     e.preventDefault()
    //     const unitObject = {
    //         street: this.state.street,
    //         city: this.state.city,
    //         zip: this.state.zip,
    //         linearFeet: this.state.linearFeet,
    //         description: this.state.description,
    //         notes: this.state.notes,
    //         colorPattern: this.state.colorPattern
    //     }
    //     axios.put(`http://localhost:3001/api/units/${this.state.clientId}/${this.state.unitId}`, unitObject)
    //         .then((res) => {
    //             console.log(res)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.onSubmit}>
                        <div>
                            <div>
                                <th>Sdiveet</th>
                                <th>City</th>
                                <th>Zip</th>
                                <th>Linear Feet</th>
                                <th>Description</th>
                                <th>Notes</th>
                                <th>Color Pattern</th>

                            </div>

                            <div>
                                <div>
                                    <div>
                                        <input type="text" value={this.state.street} onChange={this.onChangeStreet} className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.city} onChange={this.onChangeCity} className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.zip} onChange={this.onChangeZip} className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.linearFeet} onChange={this.onChangeLinearFeet} className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.description} onChange={this.onChangeDescription} className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.notes} onChange={this.onChangeNotes} className="form-control" />
                                    </div>
                                    <div>
                                        <input type="text" value={this.state.colorPattern} onChange={this.onChangeColorPattern} className="form-control" />
                                    </div>   
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <button to="/dashboard" type="submit" className="btn btn-success btn-block">save client</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateUnit;
