import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/header.jsx'

export default class ClientAdd extends Component {
    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            notes: ''
        }
    }
    onChangeFirstName(e) {
        this.setState({ firstName: e.target.value })
    }
    onChangeLastName(e) {
        this.setState({ lastName: e.target.value })
    }
    onChangePhoneNumber(e) {
        this.setState({ phoneNumber: e.target.value })
    }
    onChangeNotes(e) {
        this.setState({ notes: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const userObject = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            notes: this.state.notes
        };
        axios.post('http://localhost:3001/api/clients', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
        this.setState({ firstName: '', lastName: '', phoneNumber: '', notes: ''})
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
                            <input type="text" value={this.state.firstName} onChange={this.onChangeFirstName} className="form-control" />
                        </div>
                        <div className="form-group col-lg-4">
                            <label>Add last name</label>
                            <input type="text" value={this.state.lastName} onChange={this.onChangeLastName} className="form-control" />
                        </div>
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Phone Number</label>
                        <input type="text" value={this.state.phoneNumber} onChange={this.onChangePhoneNumber} className="form-control" />
                    </div>
                    <div className="form-group col-lg-8">
                        <label>Notes</label>
                        <input type="text" value={this.state.notes} onChange={this.onChangeNotes} className="form-control" />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-success btn-block" />
                    </div>

                </form>
            </div>
        )
    }
}