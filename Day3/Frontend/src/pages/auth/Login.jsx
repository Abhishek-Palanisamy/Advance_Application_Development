import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../assets/css/Styles.css";
function Login() {
  const nav=useNavigate();
  const formLogin=()=>{
nav("/home")
  }
  return (
    <>
      <div className="box-form">
        <div className="left">
          <div className="overlay"></div>
        </div>
        <form className="right" onSubmit={formLogin}>
          <h1>Welcome Back</h1>
          <div className="login-input">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
          </div>
          <div className="forget-password">
            <h5>Forget Password?</h5>
          </div>
          <button>Login</button>
          <div className="signuplink">
            <Link to='/register' style={{textDecoration:'none',color:'black'}}> <h4>Don't have an Account? Create One</h4></Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
