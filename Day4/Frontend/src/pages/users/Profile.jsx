import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import '../../assets/css/Styles.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Redux/features/userSlice'
function Profile() {
  const user=useSelector(selectUser);
  const firstLetter = user.user.username ? user.user.username[0].toUpperCase() : '';
  console.log(user.user);
  return (
    <>
    <Header/>

          <div className="profile-container" >
          <h1 className="fw-bold" >My Account</h1>
      </div>
          <div className="containerprof">
            <div className="top-part">
              <div className="profile-info">
              <div className="profile-image-container" style={{ position: 'relative' }}>
              <div className="image-text" style={{ position: 'absolute', top: '32%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontSize: '85px', fontWeight: 'bold', textAlign: 'center',color:'black' }}>
                {firstLetter}
              </div>
            </div>
            
                <div className="profile-details">
                  <p style={{fontSize:'25px'}}>Name: {user.user.username}</p>
           
                </div>
              </div>
              <div>
                <button className="lgot-btn">Logout</button>
                </div>
            </div>
            <div className="bottom-part">
            <ul>
            <div className="faq">
      <input id="faq-a" type="checkbox" />
      <label htmlFor="faq-a">
        <p className="faq-heading">My Orders</p>
        <div className="faq-arrow" />
        <p className="faq-text">
         orders
        </p>
      </label>
      <input id="faq-b" type="checkbox" />
      <label htmlFor="faq-b">
        <p className="faq-heading">
         Customer Care
        </p>
        <div className="faq-arrow" />
        <p className="faq-text">
         customercare
        </p>
      </label>
      <input id="faq-c" type="checkbox" />
      <label htmlFor="faq-c">
        <p className="faq-heading">Saved Cards and Rewards</p>
        <div className="faq-arrow" />
        <p className="faq-text">
          cards and rewards
        </p>
      </label>
      <input id="faq-d" type="checkbox" />
      <label htmlFor="faq-d">
        <p className="faq-heading">
         Address
        </p>
        <div className="faq-arrow" />
        <p className="faq-text">
         Address
        </p>
      </label>
      <input id="faq-e" type="checkbox" />
      <label htmlFor="faq-e">
        <p className="faq-heading">Retuns and policy</p>
        <div className="faq-arrow" />
        <p className="faq-text">
        policy return
        </p>
      </label>
      <input id="settings" type="checkbox" />
      <input id="faq-f" type="checkbox" />
      <label htmlFor="faq-f">
        <p className="faq-heading">
         Notifications
        </p>
        <div className="faq-arrow" />
        <p className="faq-text">
          notification
        </p>
      </label>
    </div>
            </ul>
          </div>
        </div>




    <Footer/>
    </>
  )
}

export default Profile