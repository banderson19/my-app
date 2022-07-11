import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import { links } from '../../data/dummy.js';


function Sidebar() {

  const activeMenu = true;

  return (
    <div>
          <div className="mt-10 ">
            <h3>Swift Holiday Lighting</h3> 
            <Link to="/" className="col"><button className="mx-1 btn btn-secondary">home</button></Link>

            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/dashboard/${link.name}`}
                    key={link.name}
                //     onClick={handleCloseSideBar}
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
          </div>
        
    </div>
  )
}

export default Sidebar