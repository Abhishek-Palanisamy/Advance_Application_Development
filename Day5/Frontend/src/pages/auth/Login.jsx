import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/css/Styles.css";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/features/userSlice";
import { ToastContainer, toast } from "react-toastify";
function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate();

  const formLogin = async (e) => {
    e.preventDefault();
    try {
      if(username!="admin" && password!="admin123") {
        await dispatch(login(username));
        toast.success("LoggedIn Successfully");
          nav("/user/");
      } 
      else if(username=='admin'&& password=='admin123'){
        await dispatch(login(username));
        nav("/admin/")
      }
      else {
        alert("Enter Valid Credentials");
      }
    } catch(error) {
      alert(error);
    }
  }

  return (
    <>
      <div className="box-form">
        <div className="left">
          <div className="overlay"></div>
        </div>
        <form className="right" onSubmit={formLogin}>
          <ToastContainer/>
          <h1>Welcome Back</h1>
          <div className="login-input">
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" required/>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} minLength={8} maxLength={16} placeholder="Password" required/>
          </div>
          <div className="forget-password">
          </div>
          <button className="auth" style={{cursor:'pointer'}}>Login</button>
          <div className="signuplink">
            <Link to='/register' style={{textDecoration:'none',color:'black'}}> <h4>Don't have an Account? Create One</h4></Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
