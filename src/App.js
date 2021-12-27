import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navbar, Footer} from './components/index';
import Home  from './pages/Home.jsx';

function App() {
  return (
    <Router>
        <div className="gradient_bg">
          <Navbar/>
          <div>
              <Home/>
              {/* <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/profile/:clientName?" component={Profile} />
              <Route exact path="/ticket/:id" component={SingleTicket} />
              <Route component={NoMatch} /> */}
            
          </div>
          <Footer/>
        </div>
    </Router>
  );
}

export default App;
