import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

import { useStateContext } from '../../context/ContextProvider.js';
import { links } from '../../data/dummy.js';

import './sidebar.css';


function Sidebar() {

  const {sidebarActive, setSidebarActive, handleClick} = useStateContext();

  const toggleSidebar = () => setSidebarActive(!sidebarActive)

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col">
          {!sidebarActive ?
          <Link to='#' className='menu-bars' style={{marginLeft: '-100px'}}>
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
          : ''}
        </div>
        <div className="navbar">
          <header>
            <h1>Swift Holiday Lighting</h1>
          </header>
        </div>
        <div className="col">
          <Link to="/" className="col"><button className="mx-1 btn btn-secondary">home</button></Link>
          <Link to="/dashboard"><button className="mx-1 btn btn-secondary">Client List</button></Link>
        </div>
      </div>
      {/* {sidebar ? */}
      <nav className={sidebarActive ? 'nav-menu active' : 'nav-menu'}>
        {/* <nav> */}
        <Link to='#' className='menu-bars' style={{marginTop: "-325px"}}onClick={toggleSidebar}>
          <AiIcons.AiOutlineClose />
        </Link>
        {links.map((item) => (
          <div key={item.title}>
            <p className="m-3 mt-4">
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink
                to={`/dashboard/${link.name}`}
                key={link.name}
                className="nav-text"
              >
                <a>{link.name}</a>
              </NavLink>
              
            ))}
          </div>
        ))}
      </nav>
      {/* header */}

    </div>
  )
}

export default Sidebar