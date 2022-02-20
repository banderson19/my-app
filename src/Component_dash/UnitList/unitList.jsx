// import React, { useState, useEffect} from 'react';
// import {useParams} from 'react-router-dom';
// import axios from 'axios';

// const UnitList = () =>{
//     const params = useParams();
//     console.log('000', params.clientId)
//     const clientId = params.clientId
//     const [units, setUnits] = useState([]);

//     useEffect(() => {
//         if(units) {
//             axios.get(`http://localhost:3001/api/clients/${clientId}`)
//                 .then(response => response.data)
//                 .then(response => {
//                     console.log(response.units)
//                     setUnits(response.units)
//                 }).catch(err => {
//                     console.log(err)
//                 })
//         }
//     }, [])

//     console.log('updated unit array', units)
//         return (
//             <div className="container">
//             <button>Add Unit</button>
//                 <table>
//                     <tr>
//                         <th>Street</th>
//                         <th>City</th>
//                         <th>Zip</th>
//                         <th>Linear Feet</th>
//                         <th>Description</th>
//                         <th>Notes</th>
//                         <th>Color Pattern</th>

//                     </tr>

//                     <tbody>
//                         {units.map((unit, i) => {
//                             return (
//                                 <tr key={i}>
//                                     <td>
//                                         {unit.street}
//                                     </td>
//                                     <td>
//                                         {unit.city}
//                                     </td>
//                                     <td>
//                                         {unit.zip}
//                                     </td>
//                                     <td>
//                                         {unit.footage}
//                                     </td>
//                                     <td>
//                                         {unit.unitDescription}
//                                     </td>
//                                     <td>
//                                         {unit.notes}
//                                     </td>
//                                     <td>
//                                         {unit.colorPattern}
//                                     </td>
//                                 </tr>
//                             )
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         );
//     }

// export default UnitList;
