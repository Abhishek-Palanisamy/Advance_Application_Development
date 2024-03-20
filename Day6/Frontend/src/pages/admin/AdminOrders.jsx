import React from 'react';
import '../../assets/css/Admin.css';
import Sidebarr from './adminComponents/Sidebarr';
import ordersList from '../../assets/others/ordersList.json';

function Ordersadmin() {
  return (
    <>
      <Sidebarr/>
      <div className='admin-home-container'>
        <div className='containerrl'>
          <h2 style={{marginLeft:"45%"}}>Orders List</h2>
          <table className='content-table'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {ordersList.map((order) => (
                <tr key={order.id} className='active-row'>
                  <td>{order.id}</td>
                  <td>{order.name}</td>
                  <td>{order.prdctname}</td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td>{order.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Ordersadmin;
