import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { links } from '../../data/dummy.js';
import './sidebar.css';


function Sidebar() {

  const [sidebar, setSidebar] = useState(true)

  const toggleSideBar = () => setSidebar(!sidebar)

  return (
    <div className>
      <div className="mt-10 ">
        {/* <Link to="/" className="col"><button className="mx-1 btn btn-secondary">home</button></Link> */}

        {sidebar ?
          <nav >
            <button onClick={() => toggleSideBar()}>close sidebar</button>
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
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
          :
          <button onClick={() => toggleSideBar()}>Open SideBar</button>}
      </div>

    </div>
    
  )
}

export default Sidebar