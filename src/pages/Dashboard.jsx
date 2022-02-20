import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Component_dash/Header/header.jsx'
import ClientList from '../Component_dash/ClientList/clientList.jsx';
import routes from '../routes';

const Dashboard = () => {
    return (
        <div>
            <Header />
            <ClientList/>
        </div>
    )
};

export default Dashboard;
