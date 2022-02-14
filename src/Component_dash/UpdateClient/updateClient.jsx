import React, { Component } from 'react'
import axios from 'axios';

class UpdateClient extends Component {
    constructor(props) {
        super(props)
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeNotes = this.onChangeNotes.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            clientId: this.props.id,
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            phoneNumber: this.props.phoneNumber,
            notes: this.props.note,
            setEdit:  this.props.setEdit
        }
        console.log('proppps', this.props)
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
        axios.put(`http://localhost:3001/api/clients/${this.state.clientId}`, userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    }

    render() {

        return (
            <div>
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
                        <button type="submit" className="btn btn-success btn-block">save client</button>
                    </div>

                </form>
            </div>
        )
    }
}

export default UpdateClient;