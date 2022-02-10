import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './clientList.css';

export default class ClientList extends Component {
    constructor(props) {
        super(props)
        this.state = { clientList: [] }
    }

    componentWillMount() {
        console.log('hello')
        axios.get('http://localhost:3001/api/clients')
            .then(response => {
                this.setState({ clientList: response.data})
            })
            .catch(err => {
                console.log('error', err)
            });
    };    

    render() {
        console.log('111', this.state.clientList)
        return (
            <div className="container">
                <table>
                    <tr>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Notes</th>
                        <th>Client Acquired</th>
                    </tr>
                    <tbody>
                        {this.state.clientList.map((client, i) => {
                            console.log(client._id)
                            return (
                                <tr>
                                    <td>
                                        <Link to={{pathname: `/profile/${client._id}`, ojb: {client}}}>{client.firstName} {client.lastName}</Link>
                                    </td>
                                    <td>
                                        {client.phoneNumber}
                                    </td>
                                    <td>
                                        {client.notes}
                                    </td>
                                    <td>
                                        {client.clientAcquired}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> 
            </div>
        )
    }
};

