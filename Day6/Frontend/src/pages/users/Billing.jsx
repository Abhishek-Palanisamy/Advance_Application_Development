import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/Styles.css'; // Import the provided CSS file
import { useDispatch } from 'react-redux';
import { emptycartIteam } from '../../Redux/features/cartSlice';

function Billing() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate(); // Use useNavigate hook to navigate
  const dispatch=useDispatch();

  // Retrieve quantity and total bill from sessionStorage
  const quantity = sessionStorage.getItem('quantity');
  const totalBill = sessionStorage.getItem('totalprice');

  // Handle form submission
  const handleBillingSubmit = (e) => {
    e.preventDefault();

    // Save form data in sessionStorage
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('address', address);
    sessionStorage.setItem('mobile', mobile);

    // Display a success message
alert("Order Placed Successfully ")
dispatch(emptycartIteam());
    // Navigate to "/user/" route
    navigate('/user/');
  };

  return (
    <>
      <Header />
      <ToastContainer />
      <div className="billingcontainer">
        <div className="form-container">
          <h2>Billing Details</h2>
          <form onSubmit={handleBillingSubmit} className='forms'>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <textarea id="address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" rows="4" style={{ height: '100px' ,resize:'none'}} required></textarea>
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile</label>
              <input type="tel" id="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} name="mobile" pattern="[0-9]{10}" required />
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input type="text" id="quantity" className="read-only-input" value={quantity} readOnly />
            </div>
            <div className="form-group">
              <label htmlFor="bill">Bill (INR)</label>
              <input type="text" id="bill" className="read-only-input" value={totalBill} readOnly />
            </div>
            <div className="button-container">
              <button type="submit">Place Order</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Billing;
