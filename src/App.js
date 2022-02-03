import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Footer} from './components/index';
import Home  from './pages/Home.jsx';

function App() {
  return (
    <Router>
        <div>
          <Home/>
          
        </div>
    </Router>
  );
}

export default App;
