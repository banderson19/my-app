import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi';
import * as BsIcons from 'react-icons/bs';



import { useStateContext } from '../../context/ContextProvider.js';
import { links } from '../../data/dummy.js';

import './sidebar.css';


function Sidebar() {

  const {sidebarActive, setSidebarActive, handleClick} = useStateContext();

  const toggleSidebar = () => setSidebarActive(!sidebarActive)

  return (
    <div className="container-fluid">
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container">
            {!sidebarActive ?
              <Link to='#' className='menu-bars me-3' style={{color: 'white'}}>
                <FaIcons.FaBars onClick={toggleSidebar} />
              </Link>
            : ''}
              <Link to="/" class="navbar-brand ps-3"> Swift Lighting </Link>
            <div className="navbar-nav ms-auto">
              <Link to="#" className="nav-link"><button className="mx-1 btn btn-secondary"><FiIcons.FiSearch/></button></Link>
              <Link to="#" className="nav-link"><button className="mx-1 btn btn-secondary"><FiIcons.FiAlertCircle/></button></Link>
              <Link to="#" className="nav-link"><button className="mx-1 btn btn-secondary"><FiIcons.FiSettings/></button></Link>

            </div>
          </div>
        </nav>
          {/* <!-- side bar --> */}
      <nav className={sidebarActive ? 'nav-menu active' : 'nav-menu'}>
        {/* <nav> */}
        <Link to="#" className='menu-bars' style={{ marginTop: '-200px'}}onClick={toggleSidebar}>
          <AiIcons.AiOutlineClose />
        </Link>
        <div>
            <div>
              <h3 className="m-3 mt-4">Dashboard</h3>
              <div>
                <Link to="/dashboard/installs" className="nav-text"><FaIcons.FaHammer className="me-2"/> Jobs</Link>  
                <Link to="/dashboard/clientList" className="nav-text" ><FaIcons.FaUserCheck className="me-2"/> Clients</Link>
              </div>
            </div>
            <div>
            <h3 className="m-3 mt-4">Apps</h3>
              <div>
                <Link to="/dashboard/calendar" className="nav-text"><AiIcons.AiFillCalendar className="me-2"/> Calendar</Link>
                <Link to="/dashboard/kanban" className="nav-text"><BsIcons.BsKanbanFill className="me-2"/> Kanban</Link>
              </div>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar