import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../component_dash/Header/header.jsx'
import ClientAdd from '../component_dash/ClientAdd/clientAdd.jsx';
import ClientList from '../component_dash/ClientList/clientList.jsx';
import routes from '../routes';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <ClientAdd/>
            <ClientList/>
        </div>
    )
};

export default Dashboard;
