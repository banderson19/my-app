import React from 'react'
import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';
import Header from '../Component_dash/Header/header.jsx';

const Expenses = () => {
  return (
    <div>
      <div className="w-25 position-fixed bg-light ">
                <Sidebar />
            </div>
            <div style={{marginLeft: "25%"}}>
                <Header />
                <h1>Expenses</h1>
            </div>
      
      </div>
  )
}

export default Expenses