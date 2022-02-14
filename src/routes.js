import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home  from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ClientList from './component_dash/ClientList/clientList.jsx';
import Profile from './component_dash/Profile/profile.jsx';
import ClientAdd from './component_dash/ClientAdd/clientAdd.jsx';


export default (
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/dashboard/clientList" element={<ClientList />} /> 
        <Route path="/dashboard/newclient" element={<ClientAdd />} /> 
        <Route path="/profile/:clientId" element={<Profile />} /> 
    </Routes>
);


