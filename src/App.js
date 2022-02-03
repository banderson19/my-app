import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Footer} from './components/index';
import Home  from './pages/Home.jsx';

function App() {
  return (
    <Router>
        <div>
          <Home/>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
