import React from 'react';
import { Routes, Route,  Link} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import routes from './routes';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ClientList from './Component_dash/ClientList/clientList.jsx';
import Profile from './Component_dash/Profile/profile.jsx';



function App() {
  return (
    <div>
      {routes}
      {/* <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/dashboard" element={<Dashboard />} /> 
      </Routes> */}
    </div>
  );
}

export default App;
