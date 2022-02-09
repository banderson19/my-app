import React from 'react';
import { Link} from 'react-router-dom';
import './clientList.css';

const clientList = () => {
  return (
    <div className="container">
        <table>
            <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Notes</th>
                <th>Client Acquired</th>
            </tr>
            <tr>
                <td>
                    <Link to="/clientList/profile">Jake Kelly</Link>
                </td>
                <td>(801) 555 - 5555</td>
                <td>new home being built next year</td>
                <td>10/10/2018</td>
            </tr>
            <tr>
                <td>
                    <Link to="/clientList/profile">Jake Kelly</Link>
                </td>
                <td>(801) 555 - 5555</td>
                <td>new home being built next year</td>
                <td>10/10/2018</td>
            </tr>
            <tr>
                <td>
                    <Link to="/clientList/profile">Jake Kelly</Link>
                </td>
                <td>(801) 555 - 5555</td>
                <td>new home being built next year</td>
                <td>10/10/2018</td>
            </tr>

        </table>
    </div>
  )
};

export default clientList;
