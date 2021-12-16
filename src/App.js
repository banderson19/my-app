import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Home from './pages/Home';
import Header from './components/Header/header';
import Footer from './components/Footer/footer';

function App() {
  return (
    <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header/>
          <div className='container'>
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
