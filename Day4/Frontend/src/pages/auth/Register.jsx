import React from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import registerbg from '../../assets/images/register_bg.jpeg'
import '../../assets/css/Styles.css'
import { ToastContainer, toast } from 'react-toastify';
function Register() {
  const nav=useNavigate();
  const formRegister=()=>{
    toast.success("Registered Successfully");
nav("/")
  }
  return (
    <>
      <div className="box-form1">
        <form className="right1" onSubmit={formRegister}>
        <ToastContainer/>
          <h1>Join Now</h1>
          <div className="login-input1">
            <input type="text" placeholder="Username" required/>
            <input type="email" placeholder="Email ID" required/>
            <input type="tel" placeholder="Mobile No" required/>
            <input type="password" placeholder="Password" required/>
            <input type="password" placeholder="Confirm Password" required/>
          </div>
          <button className='auth'>Signup</button>
          <div className="loginlink">
            <Link to="/" style={{textDecoration:'none',color:'black'}}>  <h4>Already have an Account? Login</h4></Link>
          </div>
        </form>
        <div className="left1">
        <div className="overlay1"></div>
      </div>
      </div>
    </>
    )
}

export default Register