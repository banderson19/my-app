import React from 'react';
import { Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import Sidebar from '../Sidebar/sidebar';


const Header = () => {
  return (
    <div className="container mt-3">
      <Sidebar/>
      <div className="row">
      {/* <div className="col">
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars />
          </Link>
        </div> */}
       
        {/* <header className="col">
          <h1>Swift Holiday Lighting</h1>
        </header>
        <div className="col">
          <Link to="/" className="col"><button className="mx-1 btn btn-secondary">home</button></Link>
          <Link to="/dashboard"><button className="mx-1 btn btn-secondary">Client List</button></Link>
        </div> */}

      </div>
        
    </div>
  )
};

export default Header;
