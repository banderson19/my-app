import React from 'react'
import Sidebar from '../Component_dash/Sidebar/sidebar.jsx';
import Header from '../Component_dash/Header/header.jsx';

import { useStateContext } from '../context/ContextProvider.js';


const Expenses = () => {
  const {sidebarActive} = useStateContext();

  return (
    <div>
      <div className="m-2">
            </div>
            <div style={sidebarActive ? {marginLeft: '18%', transition: '300ms'} : {marginLeft: '0', transition: '300ms'}}>
                <Sidebar />
                
                <h1>Expenses</h1>
            </div>
      
      </div>
  )
}

export default Expenses