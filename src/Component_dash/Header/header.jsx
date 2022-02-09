import React from 'react';
import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
      <div className="row">
        <header className="col">
                <h1>Swift Holiday Lighting</h1>
        </header>
        <Link to="/" className="col">
                <button>home</button>
        </Link>

      </div>
        
    </div>
  )
};

export default Header;
