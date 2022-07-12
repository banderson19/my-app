import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Component_dash/Header/header.jsx'
import ClientList from '../Component_dash/ClientList/clientList.jsx';
import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';
import Calendar from '../Apps/Calendar.jsx'
import routes from '../routes';

const Dashboard = () => {
    return (
        <div className="">
            {/* <div className="w-25 position-fixed bg-light "> */}
                <Sidebar />
            {/* </div> */}
            {/* <div style={{marginLeft: "25%"}}> */}
                <Header />
                {/* <ClientList/> */}
                <Calendar/>
            {/* </div> */}
        </div>
    )
};

export default Dashboard;
