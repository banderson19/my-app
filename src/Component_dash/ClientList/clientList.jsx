import React, { useState, useEffect, useCallback } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Search, Page } from '@syncfusion/ej2-react-grids'
import './clientList.css';

import Sidebar from '../Sidebar/sidebar.jsx';
import { clientsGrid, clientsData } from '../../data/dummy.js';
import { useStateContext } from '../../context/ContextProvider.js';


const ClientList = () => {
    const {sidebarActive} = useStateContext();
    const navigate = useNavigate();
    const [clients, setClients] = useState({})

    useEffect(() => {
        const getClients = () => {
            axios.get(`http://localhost:3001/api/clients`)
            .then(response => response.data)
            .then(response => {
                console.log('client data', response)
                setClients(response)
            })
            .catch(err => {
                console.log('error', err)
            })
        }
        getClients()
    }, [])

    const rowSelected = (props) => {
        console.log("row selected", props)
        navigate(`/profile/${props.data._id}`)
    }

    console.log('helllo', {clients})
        
  return (
    <div style={sidebarActive ? { marginLeft: '18%', transition: '300ms'} : {marginLeft: '0', transition: '300ms'}} >
        <Sidebar/>
        <h1>Client List</h1>
        <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3x1">
            <GridComponent
                dataSource={clients}
                width="auto"
                allowPaging
                allowSorting
                pageSettings={{ pageCount: 5 }}
                rowSelected={rowSelected}
                selectionType="single"

                // editSettings={editing}
                // toolbar={toolbarOptions}
            >
                <ColumnsDirective>   
                    <ColumnDirective field='_id' headerText='ID' textAlign='Center' width='120' />
                     {/* <ColumnDirective field='_id' headerText='ID' template={ () => (
                        <Link to={{ pathname: `/profile/${this._id}`}}>
                            <Button value='view'/>
                        </Link>)} 
                        textAlign='Center' width='100'/>  */}
                    <ColumnDirective field='firstName' headerText='First Name'  textAlign='Center'  width='120'/>
                    <ColumnDirective field='lastName' headerText='Last Name'  textAlign='Center'  width='120'/>
                    <ColumnDirective field='phoneNumber' headerText='Phone'  textAlign='Center'  width='120'/> 
                    <ColumnDirective field='notes' headerText='Notes'  textAlign='Center' width='120'/>
                    <ColumnDirective field='clientAquired' headerText='Client Aquired'  textAlign='Center'  width='120'/>
                </ColumnsDirective>
                <Inject services={[Search, Page]}/>
            </GridComponent>
        </div>    
    </div>
  )
}
export default ClientList

// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import './clientList.css';

// import Sidebar from '../Sidebar/sidebar';

// export default class ClientList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = { clientList: [] }
//     }

    
//     componentWillMount() {
//         console.log('hello')
//         axios.get('http://localhost:3001/api/clients')
//             .then(response => {
//                 this.setState({ clientList: response.data })
//             })
//             .catch(err => {
//                 console.log('error', err)
//             });
//     };

//     render() {
//         console.log('111', this.state.clientList)
//         return (
//             <div>
//                 <Sidebar />
//                 <div className="container">
//                     <div>
//                         <Link to={{ pathname: '/dashboard/newclient' }}><button>Add new client</button></Link>
//                     </div>
//                     <table>
//                         <tr>
//                             <th>Name</th>
//                             <th>Phone</th>
//                             <th>Notes</th>
//                             <th>Client Acquired</th>
//                         </tr>
//                         <tbody>
//                             {this.state.clientList.map((client, i) => {
//                                 return (
//                                     <tr key={i}>
//                                         <td>
//                                             <Link to={{ pathname: `/profile/${client._id}`, ojb: { client } }}>{client.firstName} {client.lastName}</Link>
//                                         </td>
//                                         <td>
//                                             {client.phoneNumber}
//                                         </td>
//                                         <td>
//                                             {client.notes}
//                                         </td>
//                                         <td>
//                                             {client.clientAcquired}
//                                         </td>
//                                     </tr>
//                                 )
//                             })}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         )
//     }
// };

