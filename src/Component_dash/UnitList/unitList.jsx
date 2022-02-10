import React, { Component } from 'react';
import axios from 'axios';

class UnitList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clientId: this.props.id,
            units: []
        }
    }
    componentWillMount() {
        console.log('hello')
        axios.get(`http://localhost:3001/api/clients/${this.state.clientId}`)
            .then(response => response.data)
            .then(response => {
                this.setState({ units: response.units })
            })
            .catch(err => {
                console.log('error', err)
            });
    };
    render() {
        console.log('777', this.state.units)

        return (
            <div className="container">
                <table>
                    <tr>
                        <th>Street</th>
                        <th>City</th>
                        <th>Zip</th>
                        <th>Linear Feet</th>
                        <th>Description</th>
                        <th>Notes</th>
                        <th>Color Pattern</th>

                    </tr>

                    <tbody>
                        {this.state.units.map((unit, i) => {
                            return (
                                <tr>
                                    <td>
                                        {unit.street}
                                    </td>
                                    <td>
                                        {unit.city}
                                    </td>
                                    <td>
                                        {unit.zip}
                                    </td>
                                    <td>
                                        {unit.footage}
                                    </td>
                                    <td>
                                        {unit.unitDescription}
                                    </td>
                                    <td>
                                        {unit.notes}
                                    </td>
                                    <td>
                                        {unit.colorPattern}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default UnitList;