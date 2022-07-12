import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


import { links } from '../../data/dummy.js';
import './sidebar.css';


function Sidebar() {

  const [sidebar, setSidebar] = useState(true)

  const toggleSidebar = () => setSidebar(!sidebar)

  return (
    <div>
      <div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={toggleSidebar} />
          </Link>
        </div>
        {/* {sidebar ? */}
          <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <Link to='#' className='menu-bars' onClick={toggleSidebar}>
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
                  // onClick={toggleSideBar}
                  //     style={({ isActive }) => ({
                  //       backgroundColor: isActive ? currentColor : '',
                  //     })}
                  //     className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    <ul>{link.name}</ul>
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
          {/* // :
          // <Link to='#' className='menu-bars'>
          //   <FaIcons.FaBars onClick={toggleSidebar} />
          // </Link>} */}
      </div>
  )
}

export default Sidebar