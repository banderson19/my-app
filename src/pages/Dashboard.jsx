import React from 'react';

import Calendar from '../Apps/Calendar.jsx';
import Kanban from '../Apps/Kanban.jsx';
import Expenses from '../Apps/Expenses.jsx';
import Header from '../Component_dash/Header/header.jsx';
import Navbar from '../Component_dash/Navbar/Navbar.jsx';
import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';

import { useStateContext } from '../context/ContextProvider.js';

const Dashboard = () => {
    const {isClicked} = useStateContext();

    return (
        <div className="">
            <div>
                <Calendar/>
                
            </div>
        </div>
    )
};

export default Dashboard;
