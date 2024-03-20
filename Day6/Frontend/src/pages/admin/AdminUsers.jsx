import React from 'react'
import Sidebarr from './adminComponents/Sidebarr'
import '../../assets/css/Admin.css'
import usersList from '../../assets/others/usersList.json'
function AdminUsers() {
  return (
    <>
    <Sidebarr/>
    <div className='admin-home-container'>
    <div className='containerrl'>
    <h2 style={{marginLeft:"45%"}}>Users List</h2>
    <table className='content-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Age</th>
          <th>Country</th>
          <th>Mobile</th>
         
          </tr>
      </thead>
      <tbody>
      {usersList.map((item) => (
        <tr key={item.id} className='active-row'>
        <td>{item.id}</td>
        <td>{item.name}</td>
          <td>{item.gender}</td>
          <td>{item.age}</td>
          <td>{item.country}</td>
          <td>{item.mobile}</td>

        </tr>
      ))}
      </tbody>
    </table>
    </div>
    </div>
    </>
  )
}

export default AdminUsers