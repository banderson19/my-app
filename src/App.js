import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
        <div className='flex-column justify-flex-start min-100-vh'>
          <Header/>
          <div className='container'>
            <Switch> 
              <Route exact path="/" component={Home} />
              {/* <Route exact path="/login" component={Login}/>
              <Route exact path="/signup" component={Signup}/>
              <Route exact path="/profile/:clientName?" component={Profile} />
              <Route exact path="/ticket/:id" component={SingleTicket} />

              <Route component={NoMatch} /> */}
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
  );
}

export default App;
