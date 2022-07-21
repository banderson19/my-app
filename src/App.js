import React from 'react';
import { Routes, Route,  Link, BrowserRouter} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ClientList from './Component_dash/ClientList/ClientList.jsx';
import Profile from './Component_dash/Profile/profile.jsx';
import ClientAdd from './Component_dash/ClientAdd/clientAdd.jsx';
import { Calendar, Kanban, Expenses } from './Apps'

// import {useStateContext} from './Context/ContextProvider';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/dashboard" element={<Dashboard />} /> 
          <Route path="/dashboard/clientList" element={<ClientList />} /> 
          <Route path="/dashboard/newclient" element={<ClientAdd />} /> 
          <Route path="/profile/:clientId" element={<Profile />} /> 
          <Route path="/dashboard/calendar" element={<Calendar />} /> 
          <Route path="/dashboard/kanban" element={<Kanban />} /> 
          <Route path="/dashboard/expenses" element={<Expenses />} /> 
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
