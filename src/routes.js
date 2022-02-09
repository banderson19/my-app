import React from "react";
import { Routes, Route} from 'react-router-dom';
import Home  from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ClientList from './Component_dash/ClientList/clientList.jsx';
import Profile from './Component_dash/Profile/profile.jsx';

export default (
    <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
        <Route path="/dashboard/clientList" element={<ClientList />} /> 
        <Route path="/clientList/profile" element={<Profile />} /> 
    </Routes>
);


