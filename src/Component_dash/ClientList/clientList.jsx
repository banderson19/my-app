import React, { useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { GridComponent, ColumnsDirective, ColumnDirective, Inject, Search, Page } from '@syncfusion/ej2-react-grids'
import './clientList.css';

import Sidebar from '../Sidebar/sidebar.jsx';
import { clientsGrid, clientsData } from '../../data/dummy.js';
import { formatPhoneNumber } from '../../data/utils.js';
import { useStateContext } from '../../context/ContextProvider.js';


const ClientList = () => {
    const {sidebarActive} = useStateContext();
    // use navigate to link to other page
    const navigate = useNavigate();
    const [clients, setClients] = useState({})

    // useEffect to axios GET client from database,
    // while the second parameter takes in a dependency array
    useEffect(() => {
        const getClients = () => {
            axios.get(`http://localhost:3001/api/clients`)
            .then(response => response.data)
            .then(response => {
                console.log('getClients', response)
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
                    <ColumnDirective field='firstName' headerText='First Name'  textAlign='Center'  width='120'/>
                    <ColumnDirective field='lastName' headerText='Last Name'  textAlign='Center'  width='120'/>
                    <ColumnDirective field='phoneNumber' headerText='Phone' textAlign='Center'  width='120'/> 
                    <ColumnDirective field='notes' headerText='Notes'  textAlign='Center' width='120'/>
                    <ColumnDirective field='clientAcquired' headerText='Client Acquired'  textAlign='Center'  width='120'/>
                </ColumnsDirective>
                <Inject services={[Search, Page]}/>
            </GridComponent>
        </div>    
    </div>
  )
}
export default ClientList

