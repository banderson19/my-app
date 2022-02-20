import React,{useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

import axios from 'axios';
import Header from '../Header/header.jsx'

const UnitAdd = () => {
  const location = useLocation();
    console.log(location)
    const [street, setStreet] = useState('');
    const [city, setCity]  = useState('');

//    axios.post(`http://localhost:3001/api/units/${clientId}`, unitObject)
//             .then((res) => {
//                 console.log(res.data)
//             }).catch((error) => {
//                 console.log(error)
//             });
//             unitObject: {}

  return (
    <div>
      <form>
            <div className="row">
                <div className="form-group col-lg-4">
                    <label>Add first name</label>
                    <input type="text"   className="form-control" />
                </div>
                <div className="form-group col-lg-4">
                    <label>Add last name</label>
                    <input type="text"   className="form-control" />
                </div>
            </div>
            <div className="form-group col-lg-8">
                <label>Phone Number</label>
                <input type="text"   className="form-control" />
            </div>
            <div className="form-group col-lg-8">
                <label>Notes</label>
                <input type="text"   className="form-control" />
            </div>
            <div className="form-group">
                <input  type="submit" value="Create User" className="btn btn-success btn-block"/>
            </div>

        </form>
    
    </div>
  )
}

export default UnitAdd;
